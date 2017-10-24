// @flow

import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/react-vis-line/react-vis-line.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{

        'pages/demos/react-vis-line/LineChartWithStyle.js': {
          js: require('docs/src/pages/demos/react-vis-line/LineChartWithStyle').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/react-vis-line/LineChartWithStyle'), 'utf8')
`,
        },

        'pages/demos/react-vis-line/LineSeries1.js': {
          js: require('docs/src/pages/demos/react-vis-line/LineSeries1').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/react-vis-line/LineSeries1'), 'utf8')
`,
        },

        'pages/demos/react-vis-line/LineSeries2.js': {
          js: require('docs/src/pages/demos/react-vis-line/LineSeries2').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/react-vis-line/LineSeries2'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
