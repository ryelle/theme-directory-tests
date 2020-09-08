/**
 * External dependencies
 */
import { createURL } from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */
import urls from './pages';

describe( 'Accessibility', () => {
	beforeAll( async () => {
		await page.goto( createURL( '/' ) );
	} );

	test.each( urls )(
		'Should pass Axe tests on %s',
		async ( name, path, query ) => {
			await page.goto( createURL( path, query ) );
			await expect( page ).toPassAxeTests( {
				options: {
					runOnly: {
						type: 'tag',
						values: [ 'best-practice' ],
					},
					exclude: [ [ '.entry-content' ] ],
				},
			} );
		}
	);
} );
