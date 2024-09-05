"use client";

import { useState } from 'react'
import { ChartConfig } from '../ui/chart';

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { handleData } from '@/lib/analytics';

type Props = {
  chartData: any[];
  chartConfig: ChartConfig;
  valueKey: string;
  title: string
  open: boolean;
  onOpenChange: () => void;
}

function ChartModal({ chartData, chartConfig, valueKey, title, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>
            {title}
          </DialogTitle>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  )
}

export default ChartModal
