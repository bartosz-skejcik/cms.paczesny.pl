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
  CardFooter,
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
import Link from "next/link";
import { MaximizeIcon } from "lucide-react";
import ChartModal from "./chart-modal";

type Props = {
  data: any[]
  valueKey: string
  title: string
  span?: 2 | 3
}

export const chartConfig = {
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
  const [open, setOpen] = useState(false);

  if (chartData.length === 0 && data && data.length > 0) {
    handleData(valueKey, data, setChartData);
    console.log(valueKey, title, chartData)
  }

  return (
    <>

      <ChartModal chartConfig={chartConfig} chartData={chartData} valueKey={valueKey} title={title} open={open} onOpenChange={() => setOpen(!open)} />
      <Card className={`col-span-1 h-fit lg:col-span-2 ${span == 3 ? "2xl:col-span-3" : ""}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {valueKey && chartData.length > 0 &&
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData.length > 6 ? chartData.slice(0, 6) : chartData}
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
          <CardFooter className="w-full flex items-center justify-center p-0 pt-5">
            <button onClick={() => setOpen(true)} className="px-3 py-1 flex items-center justify-center gap-2 hover:bg-muted-foreground/10 text-sm rounded-lg transition-all duration-200">
              <MaximizeIcon className="h-4 w-4" />
              View full
            </button>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  )
}

export default BasicChart
