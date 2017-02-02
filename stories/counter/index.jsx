import React from 'react';
import { action } from '@kadira/storybook';
import { number, select } from '@kadira/storybook-addon-knobs';
import Counter from 'counter/counter.presentation';

export default stories => (
  stories
    .add('Counter', () => {
    	return (
    		<Counter
          value={ number('Value', 10) }
          onAdd={ action('on add') }
          onAddSlowly={ action('on add slowly') }
          currentRoles={ [ 'user' ] }
          router={ { authorize: ['user'], push: () => {} } }
        />
    	);
    })
)
