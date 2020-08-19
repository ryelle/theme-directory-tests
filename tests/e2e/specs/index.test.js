/**
 * External dependencies
 */
import { createURL } from '@wordpress/e2e-test-utils';

describe( 'Home', () => {
	beforeAll( async () => {
		await page.goto( createURL( '/' ) );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests( {
			options: {
				runOnly: {
					type: 'tag',
					values: [ 'wcag2a' ],
				},
			},
		} );
	} );
} );
