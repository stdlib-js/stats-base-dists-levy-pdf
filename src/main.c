/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/stats/base/dists/levy/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/two_pi.h"

/**
* Evaluates the probability density function (PDF) for a Lévy distribution with location parameter `mu` and scale parameter `c` at a value `x`.
*
* @param x     input value
* @param mu    location parameter
* @param c     scale parameter
* @return      evaluated PDF
*
* @example
* double y = stdlib_base_dists_levy_pdf( 2.0, 0.0, 1.0 );
* // returns ~0.11
*/
double stdlib_base_dists_levy_pdf( const double x, const double mu, const double c ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( c ) ||
		c <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x <= mu ) {
		return 0.0;
	}
	return stdlib_base_sqrt( ( c / STDLIB_CONSTANT_FLOAT64_TWO_PI ) ) * stdlib_base_exp( -c / ( 2.0 * ( x - mu ) ) ) / stdlib_base_pow( x - mu, 1.5 ) ;
}
