/**
 * Example showcasing use of `DashedLine` style in a chart with two time series trends along the same Y axis.
 */

const lcjs = require('@arction/lcjs')

const { lightningChart, Themes, AxisTickStrategies, DashedLine, PointShape, StipplePatterns } = lcjs

const chart = lightningChart()
    .ChartXY({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    })
    .setTitle('Total revenue and renewal revenue')

const axisX = chart
    .getDefaultAxisX()
    // Configure DateTime X ticks
    .setTickStrategy(AxisTickStrategies.DateTime, (ticks) =>
        // Show only month like "September" in cursor result table
        ticks.setCursorFormatter((timestamp) => new Date(timestamp).toLocaleDateString(undefined, { month: 'long' })),
    )

const axisY = chart
    .getDefaultAxisY()
    // Configure Y axis formatting as "100 k€"
    .setTickStrategy(AxisTickStrategies.Numeric, (ticks) => ticks.setFormattingFunction((euros) => `${(euros / 1000).toFixed(0)} k€`))

const seriesTotalRevenue = chart
    .addSplineSeries({ pointShape: PointShape.Circle })
    .setName('Total revenue')
    .setCursorInterpolationEnabled(false)

const seriesRenewalRevenue = chart
    .addSplineSeries({ pointShape: PointShape.Circle })
    .setName('Renewal revenue')
    .setCursorInterpolationEnabled(false)
    .setStrokeStyle(
        (stroke) =>
            new DashedLine({
                fillStyle: stroke.getFillStyle(),
                thickness: stroke.getThickness(),
                pattern: StipplePatterns.Dashed,
                patternScale: 2,
            }),
    )

seriesTotalRevenue.add([
    // NOTE: X coordinates are millisecond timestamps
    { x: new Date(2022, 5, 1).getTime(), y: 80140 },
    { x: new Date(2022, 6, 1).getTime(), y: 102200 },
    { x: new Date(2022, 7, 1).getTime(), y: 95920 },
    { x: new Date(2022, 8, 1).getTime(), y: 99010 },
    { x: new Date(2022, 9, 1).getTime(), y: 69560 },
    { x: new Date(2022, 10, 1).getTime(), y: 72800 },
    { x: new Date(2022, 11, 1).getTime(), y: 94200 },
    { x: new Date(2023, 0, 1).getTime(), y: 72560 },
    { x: new Date(2023, 1, 1).getTime(), y: 88560 },
])

seriesRenewalRevenue.add([
    { x: new Date(2022, 5, 1).getTime(), y: 36220 },
    { x: new Date(2022, 6, 1).getTime(), y: 40190 },
    { x: new Date(2022, 7, 1).getTime(), y: 44520 },
    { x: new Date(2022, 8, 1).getTime(), y: 41200 },
    { x: new Date(2022, 9, 1).getTime(), y: 50220 },
    { x: new Date(2022, 10, 1).getTime(), y: 51650 },
    { x: new Date(2022, 11, 1).getTime(), y: 54980 },
    { x: new Date(2023, 0, 1).getTime(), y: 56240 },
    { x: new Date(2023, 1, 1).getTime(), y: 62820 },
])

// Configure both Axis intervals manually to add some extra space around line series
axisX.setInterval({
    start: seriesTotalRevenue.getXMin() - 7 * 24 * 60 * 60 * 1000,
    end: seriesTotalRevenue.getXMax() + 7 * 24 * 60 * 60 * 1000,
})

axisY.setInterval({
    start: seriesRenewalRevenue.getYMin() - 10000,
    end: seriesTotalRevenue.getYMax() + 10000,
})
