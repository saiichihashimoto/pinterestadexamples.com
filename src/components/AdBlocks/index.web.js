/* eslint react/no-array-index-key: 0 */
import React from 'react';
import StackGrid from 'react-stack-grid';
import styles from './AdBlocks.module.scss';

const AdBlock = ({ ads = [] }) => (
	<StackGrid
		columnWidth={260}
		gutterWidth={0}
		gutterHeight={0}>
		{ads.map((ad, index) => (
			<div key={index} className={styles.blockContainer}>
				<div className={styles.block}>
					<pre>{JSON.stringify(ad, null, 4)}</pre>
				</div>
			</div>
		))}
	</StackGrid>
);

export default AdBlock;
