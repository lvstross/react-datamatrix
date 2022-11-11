/**
	https://github.com/datalog/datamatrix-svg
	under MIT license
	Copyright (c) 2020 Constantine
*/

export interface DataMatrixArgs {
	msg: string;
	dim?: number;
	rct?: number;
	pad?: number;
	pal?: string[];
	vrb?: number;
}

export default function DATAMatrix( Q: DataMatrixArgs ) {

	var
	 M = [] as any[]
	,xx = 0
	,yy = 0

	,bit = function( x: number, y: number ) {

			M[ y ] = M[ y ] || [],
			M[ y ][ x ] = 1;
		}

	,toAscii = function( t: string ) {

		var
		r = [],
		l = t.length;

		for( var i = 0; i < l; i++ ) {

			var
			c = t.charCodeAt( i ),
			c1 = ( i + 1 < l ) ? t.charCodeAt( i + 1 ) : 0;

			if( c > 47 && c < 58 && c1 > 47 && c1 < 58 ) { /* 2 digits */
				// @ts-ignore
				r.push( ( c - 48 ) * 10 + c1 + 82 ), /* - 48 + 130 = 82 */
				i++;

			} else if( c > 127 ) { /* extended char */
				// @ts-ignore
				r.push( 235 ),
				// @ts-ignore
				r.push( ( c - 127 ) & 255 );
// @ts-ignore
			} else r.push( c + 1 ); /* char */
		}

		return r;
	}

	,toBase = function( t: string ) {

		var
		r = [ 231 ], /* switch to Base 256 */
		l = t.length;

		if( 250 < l ) {

			r.push( 37 + ( l / 250 | 0 ) & 255 ); /* length high byte (in 255 state algo) */
		}

			r.push( l % 250 + 149 * ( r.length + 1 ) % 255 + 1 & 255 ); /* length low byte (in 255 state algo) */

		for( var i = 0; i < l; i++ ) {

			r.push( t.charCodeAt( i ) + 149 * ( r.length + 1 ) % 255 + 1 & 255 ); /* data in 255 state algo */
		}

		return r;
	}

	,toEdifact = function( t: string ) {

		var
		n = t.length,
		l = ( n + 1 ) & -4, cw = 0, ch,
		r = ( l > 0 ) ? [ 240 ] : []; /* switch to Edifact */

		for( var i = 0; i < l; i++ ) {

			if( i < l - 1 ) {

				/* encode char */
				ch = t.charCodeAt( i );
				if( ch < 32 || ch > 94 ) return []; /* not in set */

			} else ch = 31; /* return to ASCII */

			cw = cw * 64 + ( ch & 63 );

			if(( i & 3 ) == 3 ) {

				/* 4 data in 3 words */
				r.push( cw >> 16 ), 
				r.push( cw >> 8& 255 ),
				r.push( cw & 255 ),
				cw = 0;
			}
		};

		return l > n ? r : r.concat( toAscii( t.substr( l == 0 ? 0 : l - 1 ) ) ); /* last chars*/
	}

	,toText = function( t: string, s: string ) {

		var
		i, j,
		cc = 0,
		cw = 0,
		l = t.length,
		r = [ s[ 0 ] ], /* start switch */
		push = function( v: any ) { 

			/* pack 3 chars in 2 codes */
			cw = 40 * cw + v;

			/* add code */
			if( cc++ == 2 ) { 
				// @ts-ignore
				r.push( ++cw >> 8 ),
				// @ts-ignore
				r.push( cw & 255 ),
				cc = cw = 0;
			}
		};

		for( i = 0; i < l; i++ ) {

			/* last char in ASCII is shorter */
			if( 0 == cc && i == l - 1 ) break;

			var
			ch = t.charCodeAt(i);
			// @ts-ignore
			if( ch > 127 && 238 != r[ 0 ] ) { /* extended char */

				push( 1 ),
				push( 30 ),
				ch -= 128; /* hi bit in C40 & TEXT */
			}
			// @ts-ignore
			for( j = 1; ch > s[ j ]; j += 3 ); /* select char set */

			var
			x = s[ j + 1 ]; /* shift */

			// @ts-ignore
			if( 8 == x || ( 9 == x && 0 == cc && i == l - 1 ) ) return []; /* char not in set or padding fails */
			// @ts-ignore
			if( x < 5 && cc == 2 && i == l-1) break; /* last char in ASCII */
			// @ts-ignore
			if( x < 5 ) push( x ); /* shift */
			// @ts-ignore
			push( ch - s[ j + 2 ] ); /* char offset */
		}
		// @ts-ignore
		if(2 == cc && 238 !== r[ 0 ] ) { /* add pad */

			 push( 0 ); 
		}
		// @ts-ignore
		r.push( 254 ); /* return to ASCII */
		// @ts-ignore
		if( cc > 0 || i < l ) r = r.concat( toAscii( t.substr( i - cc ) ) ); /* last chars */

		return r;
	}
	// @ts-ignore
	,encodeMsg = function( text, rct ) {

		text = unescape( encodeURI( text ) );

		var
		M = [];

		var
		enc = toAscii( text ),
		el = enc.length,
		// @ts-ignore
		k = toText( text, [	/* C40 */
					230,
					 31, 0,  0,
					 32, 9, 29,
					 47, 1, 33,
					 57, 9, 44,
					 64, 1, 43,
					 90, 9, 51,
					 95, 1, 69,
					127, 2, 96,
					255, 1,  0
				]),
		l = k.length;
		// @ts-ignore
		if( l > 0 && l < el ) enc = k, el = l;

		// @ts-ignore
		k = toText( text, [	/* TEXT */
					239,
					 31, 0,  0,
					 32, 9, 29,
					 47, 1, 33,
					 57, 9, 44,
					 64, 1, 43,
					 90, 2, 64,
					 95, 1, 69,
					122, 9, 83,
					127, 2, 96,
					255, 1,  0
				]); 
		l = k.length;
		// @ts-ignore
		if( l > 0 && l < el ) enc = k, el = l;
		// @ts-ignore
		k = toText( text, [	/* X12*/
					238,
					 12, 8,  0,
					 13, 9, 13,
					 31, 8,  0,
					 32, 9, 29,
					 41, 8,  0,
					 42, 9, 41,
					 47, 8,  0,
					 57, 9, 44,
					 64, 8,  0,
					 90, 9, 51,
					255, 8,  0
				]); 
		l = k.length;
		// @ts-ignore
		if( l > 0 && l < el ) enc = k, el = l;
		// @ts-ignore
		k = toEdifact( text ); l = k.length;
		// @ts-ignore
		if( l > 0 && l < el ) enc = k, el = l;
		// @ts-ignore
		k = toBase( text ); l = k.length;
		// @ts-ignore
		if( l > 0 && l < el ) enc = k, el = l;


		var
		h, w, nc = 1, nr = 1, fw, fh, /* symbol size, regions, region size */
		i, j = - 1, c, r, s, b = 1, /* compute symbol size */

		rs = new Array(  70 ), /* reed / solomon code */
		rc = new Array(  70 ),
		lg = new Array( 256 ), /* log / exp table for multiplication */
		ex = new Array( 255 );

		if( rct && el < 50 ) { 

			/* rect */
			// @ts-ignore
			k = [	/* symbol width, checkwords */
			// @ts-ignore
				16,  7,
				// @ts-ignore
				28, 11,
				// @ts-ignore
				24, 14,
				// @ts-ignore
				32, 18,
				// @ts-ignore
				32, 24,
				// @ts-ignore
				44, 28
			];

			do {
				w = k[ ++j ]; /* width */
				h = 6 + ( j & 12 ); /* height */
				// @ts-ignore
				l = w * h / 8; /* bytes count in symbol */
			// @ts-ignore
			} while( l - k[ ++j ] < el ); /* could we fill the rect? */

			/* column regions */
			// @ts-ignore
			if( w > 25 ) nc = 2;

		} else { 

			/* square */

			w = h = 6;
			i = 2; /* size increment */
			// @ts-ignore
			k = [ 5, 7, 10, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 68, 84, 112, 144, 192, 224, 272, 336, 408, 496, 620 ]; /* rs checkwords */

			do {
				if( ++j == k.length ) return [ 0, 0 ]; /* msg is too long */

				if( w > 11 * i ) i = 4 + i & 12; /* advance increment */

				w = h += i;
				l = ( w * h ) >> 3;
			// @ts-ignore
			} while( l - k[ j ] < el );

			if( w > 27 ) nr = nc = 2 * ( w / 54 | 0 ) + 2; /* regions */
			if( l > 255 ) b = 2 * ( l >> 9 ) + 2; /* blocks */
		}


		s = k[ j ], /* rs checkwords */
		// @ts-ignore
		fw = w / nc, /* region size */
		fh = h / nr;

		/* first padding */
		// @ts-ignore
		if( el < l - s ) enc[ el++ ] = 129;

		/* more padding */
		// @ts-ignore
		while( el < l - s ) {
		// @ts-ignore
			enc[ el++ ] = ( ( ( 149 * el ) % 253 ) + 130 ) % 254;
		}


		/* Reed Solomon error detection and correction */
		// @ts-ignore
		s /= b;

		/* log / exp table of Galois field */
		for( j = 1, i = 0; i < 255; i++ ) { 

			ex[ i ] = j,
			lg[ j ] = i,
			j += j;

			if( j > 255 ) j ^= 301; /* 301 == a^8 + a^5 + a^3 + a^2 + 1 */
		}

		/* RS generator polynomial */
		// @ts-ignore
		for( rs[ s ] = 0, i = 1; i <= s; i++ ) 
		// @ts-ignore
			for( j = s - i, rs[ j ] = 1; j < s; j++ )
				rs[ j ] = rs[ j + 1 ] ^ ex[ ( lg[ rs[ j ] ] + i ) % 255 ];

		/* RS correction data for each block */
		for( c = 0; c < b; c++ ) { 
			// @ts-ignore
			for( i = 0; i <= s; i++ ) rc[ i ] = 0;
			// @ts-ignore
			for( i = c; i < el; i += b )
			// @ts-ignore
				for( j = 0, x = rc[ 0 ] ^ enc[ i ]; j < s; j++ )
				// @ts-ignore
					rc[ j ] = rc[ j + 1 ] ^ ( x ? ex[ ( lg[ rs[ j ] ] + lg[ x ] ) % 255 ] : 0 );

			/* interleaved correction data */
			// @ts-ignore
			for( i = 0; i < s; i++ ) 
			// @ts-ignore
				enc[ el + c + i * b ] = rc[ i ];
		}

		/* layout perimeter finder pattern */
		/* horizontal */
		for( i = 0; i < h + 2 * nr; i += fh + 2 )
		// @ts-ignore
			for( j = 0; j < w + 2 * nc; j++ ) {
				bit( j, i + fh + 1 );
				if( ( j & 1 ) == 0 ) bit( j, i );
			}

		/* vertical */
		// @ts-ignore
		for( i = 0; i < w + 2 * nc; i += fw + 2 )
			for( j = 0; j < h; j++ ) {
	 			bit( i, j + ( j / fh | 0 ) * 2 + 1 );
				if( ( j & 1 ) == 1 ) bit( i + fw + 1, j + ( j / fh | 0 ) * 2 );
			}

		s = 2, /* step */
		c = 0, /* column */
		r = 4, /* row */
		// @ts-ignore
		b = [ /* nominal byte layout */
			 0,  0,
			-1,  0,
			-2,  0,
			 0, -1,
			-1, -1,
			-2, -1,
			-1, -2,
			-2, -2
		];

		/* diagonal steps */
		for( i = 0; i < l; r -= s, c += s ) { 

			if( r == h - 3 && c == - 1 )

				k = [ /* corner A layout */
				// @ts-ignore
					    w, 6 - h,
						// @ts-ignore
					    w, 5 - h,
						// @ts-ignore
					    w, 4 - h,
						// @ts-ignore
					    w, 3 - h,
						// @ts-ignore
					w - 1, 3 - h,
					// @ts-ignore
					    3,     2,
						// @ts-ignore
					    2,     2,
						// @ts-ignore
					    1,     2
				];
			// @ts-ignore
			else if( r == h + 1 && c == 1 && ( w & 7 ) == 0 && ( h & 7 ) == 6 )

				k = [ /* corner D layout */
				// @ts-ignore
					w - 2,     -h,
					// @ts-ignore
					w - 3,     -h,
					// @ts-ignore
					w - 4,     -h,
					// @ts-ignore
					w - 2, -1 - h,
					// @ts-ignore
					w - 3, -1 - h,
					// @ts-ignore
					w - 4, -1 - h,
					// @ts-ignore
					w - 2, -2,
					// @ts-ignore
					   -1,     -2
				];
			else {
				// @ts-ignore
				if( r == 0 && c == w - 2 && ( w & 3 ) ) continue; /* corner B: omit upper left */
				if( r < 0 || c >= w || r >= h || c < 0 ) { /* outside */

					s  = -s, /* turn around */
					r += 2 + s / 2,
					c += 2 - s / 2;

					while( r < 0 || c >= w || r >= h || c < 0 ) {

						r -= s,
						c += s;
					}
				}
				// @ts-ignore
				if( r == h - 2 && c == 0 && ( w & 3 ) )

					k = [ /* corner B layout */
					// @ts-ignore
						w - 1, 3 - h,
						// @ts-ignore
						w - 1, 2 - h,
						// @ts-ignore
						w - 2, 2 - h,
						// @ts-ignore
						w - 3, 2 - h,
						// @ts-ignore
						w - 4, 2 - h,
						// @ts-ignore
						    0,     1,
							// @ts-ignore
						    0,     0,
							// @ts-ignore
						    0,    -1
					];
// @ts-ignore
				else if( r == h - 2 && c == 0 && ( w & 7 ) == 4 )

					k = [ /* corner C layout */
					// @ts-ignore
						w - 1, 5 - h,
						// @ts-ignore
						w - 1, 4 - h,
						// @ts-ignore
						w - 1, 3 - h,
						// @ts-ignore
						w - 1, 2 - h,
						// @ts-ignore
						w - 2, 2 - h,
						// @ts-ignore
						    0,     1,
							// @ts-ignore
						    0,     0,
							// @ts-ignore
						    0,    -1
					];
// @ts-ignore
				else if( r == 1 && c == w - 1 && ( w & 7 ) == 0 && ( h & 7 ) == 6 ) continue; /* omit corner D */
				// @ts-ignore
				else k = b; /* nominal L - shape layout */
			}

 			/* layout each bit */
			for( el = enc[ i++ ], j = 0; el > 0; j += 2, el >>= 1 ) {

				if( el & 1 ) {

					var
					x = c + k[ j ],
					y = r + k[ j + 1 ];

 					/* wrap around */
					// @ts-ignore
					if( x < 0 ) x += w, y += 4 - ( ( w + 4 ) & 7 );
					// @ts-ignore
					if( y < 0 ) y += h, x += 4 - ( ( h + 4 ) & 7 );

					/* region gap */
					// @ts-ignore
					bit( x + 2 * ( x / fw | 0 ) + 1, y + 2 * ( y / fh | 0 ) + 1 );
				}
			}
		}



		/* unfilled corner */// @ts-ignore
		for( i = w; i & 3; i-- ) {
// @ts-ignore
			bit( i, i ); 
		}
// @ts-ignore
		xx = w + 2 * nc,
		yy = h + 2 * nr;
	}

	return ( function() {
// @ts-ignore
		function ishex( c ) {

			return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test( c );
		}
// @ts-ignore
		function svg( n, a ) {

			n = document.createElementNS( ns, n );

			for( var o in a || {} ) {

				n.setAttribute( o, a[ o ] );
			}

			return n;
		}

		var
		 abs = Math.abs,
		r, x, y, d, sx, sy,

		  ns = 'http://www.w3.org/2000/svg',
		path = '',

		   q = ('string' == typeof Q ) ? { msg: Q } : Q || {},
		   p = q.pal || ['#000'],
		   // @ts-ignore
		  dm = abs( q.dim ) || 256,
		  // @ts-ignore
		  pd = abs( q.pad ), pd = ( pd > -1 ) ? pd : 2,
		  mx = [ 1, 0, 0, 1, pd, pd ],

		  fg = p[ 0 ], fg = ishex( fg ) ? fg : '#000',
		  // @ts-ignore
		  bg = p[ 1 ], bg = ishex( bg ) ? bg :  0,

		/* render optimized or verbose svg */
		optimized = ( q.vrb ) ? 0 : 1;

		encodeMsg( q.msg || '', q.rct );

		sx = xx + pd * 2,
		sy = yy + pd * 2;

		y = yy;

		while( y-- ) {

			d = 0, x = xx;

			while( x-- ) {

				if( M[ y ][ x ] ) {

					if( optimized ) {

						d++;

						if( !M[ y ][ x - 1 ] )

							path += 'M' + x + ',' + y + 'h' + d +'v1h-' + d + 'v-1z', d = 0;

					} else path += 'M' + x + ',' + y + 'h1v1h-1v-1z';
				}
			}
		}


		r = svg('svg', {

					 'viewBox'		: [ 0, 0, sx, sy ].join(' ')
					,'width'		:  dm / sy * sx | 0
					,'height'		:  dm
					,'fill'			:  fg
					,'shape-rendering'	: 'crispEdges'
					,'xmlns'		:  ns 
					,'version'		: '1.1'
				} );

		if( bg ) r.appendChild( svg('path', {

					 'fill'			:  bg
					,'d'			: 'M0,0v' + sy + 'h' + sx + 'V0H0Z'
				} ) );

		r.appendChild( svg('path', {

					 'transform'		: 'matrix(' + mx + ')'
					,'d'			:  path
				} ) );

		return r;

	} )();
}