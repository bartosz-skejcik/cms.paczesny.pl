"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { handleData } from "@/lib/analytics";
import { useState } from "react";

type Props = {
  data: any[]
  valueKey: string
  title: string
  span?: 2 | 3
}

const chartConfig = {
  hits: {
    label: "Hits",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--foreground))",
  },
} satisfies ChartConfig;

function BasicChart({ data, valueKey, title, span = 2 }: Props) {
  const [chartData, setChartData] = useState([]);

  if (chartData.length === 0 && data && data.length > 0) {
    handleData(valueKey, data, setChartData);
    console.log(valueKey, title, chartData)
  }

  return (
    <Card className={`col-span-1 h-fit lg:col-span-2 ${span == 3 ? "2xl:col-span-3" : ""}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {valueKey && chartData.length > 0 &&
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey={valueKey}
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                hide
              />
              <XAxis dataKey="hits" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="hits"
                layout="vertical"
                fill="var(--color-hits)"
                radius={4}
              >
                <LabelList
                  dataKey={valueKey}
                  position="insideLeft"
                  offset={8}
                  className="fill-[--color-label]"
                  fontSize={12}
                />
                <LabelList
                  dataKey="hits"
                  position="right"
                  offset={8}
                  className="fill-secondary"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        }
      </CardContent>
    </Card>
  )
}

export default BasicChart
