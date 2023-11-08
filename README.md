# JavaScript Dashed Spline Chart

![JavaScript Dashed Spline Chart](dashedSupplementaryTrends-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

Example showcasing use of `DashedLine` style in a chart with two time series trends along the same Y axis.

This approach could be used in use cases with 1 "primary" trend, and 1 or more "supplementary" trends, which don't reflect the primary message of the data visualization but rather some "extra" information that may be useful along-side.

In this case, the dashed line style helps convey the message that this trend is not the main point to look at.


## API Links

* [XY cartesian chart]
* [Line series]
* [Axis]
* [Constant Line]
* [DashedLine]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[XY cartesian chart]: https://lightningchart.com/js-charts/api-documentation/v5.0.1/classes/ChartXY.html
[Line series]: https://lightningchart.com/js-charts/api-documentation/v5.0.1/classes/LineSeries.html
[Axis]: https://lightningchart.com/js-charts/api-documentation/v5.0.1/classes/Axis.html
[Constant Line]: https://lightningchart.com/js-charts/api-documentation/v5.0.1/classes/ConstantLine.html
[DashedLine]: https://lightningchart.com/js-charts/api-documentation/v5.0.1/classes/DashedLine.html

