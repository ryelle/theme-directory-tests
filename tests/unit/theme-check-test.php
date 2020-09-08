<?php

defined( 'WPINC' ) || die();

class Test_ThemeCheck extends WP_UnitTestCase {
	/**
	 * Run theme checks.
	 */
	public function test_unit_tests_work() {
		global $themechecks;
		ob_start();
		check_main( 'seedlet' );
		ob_end_clean();

		$errors = array();
		foreach ( $themechecks as $check ) {
			$check_error = $check->getError();
			if ( count( $check_error ) ) {
				$errors = array_merge( $errors, (array) $check_error );
			}
		}
		// Filter out only the required issues.
		$errors = array_filter(
			$check_error,
			function( $error_str ) {
				return 0 === strpos( 'REQUIRED:', strip_tags( $error_str ) );
			}
		);

		$this->assertCount( 0, $errors );
	}
}
