/**
 * Example showcasing use of `DashedLine` style in a chart with two time series trends along the same Y axis.
 */

const lcjs = require('@lightningchart/lcjs')

const { lightningChart, Themes, AxisTickStrategies, DashedLine, PointShape, emptyFill, StipplePatterns } = lcjs

const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .ChartXY({
        legend: { visible: false },
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
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

const seriesTotalRevenue = chart.addSplineSeries(
    { automaticColorIndex: 4 },
).setName('Total revenue')

const seriesRenewalRevenue = chart
    .addSplineSeries(
        { automaticColorIndex: 1 },
    )
    .setName('Renewal revenue')
    .setStrokeStyle(
        (stroke) =>
            new DashedLine({
                fillStyle: stroke.getFillStyle(),
                thickness: stroke.getThickness(),
                pattern: StipplePatterns.Dashed,
                patternScale: 2,
            }),
    )

seriesTotalRevenue.appendJSON([
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

seriesRenewalRevenue.appendJSON([
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

axisX.setInterval({
    start: seriesTotalRevenue.getXMin() - 7 * 24 * 60 * 60 * 1000,
    end: seriesTotalRevenue.getXMax() + 7 * 24 * 60 * 60 * 1000,
})

axisY.setInterval({
    start: seriesRenewalRevenue.getYMin() * 0.95,
    end: seriesTotalRevenue.getYMax() * 1.025,
})
