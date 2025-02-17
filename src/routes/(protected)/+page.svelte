<script>


	import { Highlight, LineChart, pivotWider, Spline, Tooltip } from 'layerchart';
	
	import { format } from '@layerstack/utils';

	
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';


	const multiSeriesData = [
		{
			date: new Date('2024-12-09T18:00:00.000Z'),
			fruit: 'apples',
			value: 44
		},
		{
			date: new Date('2024-12-09T18:00:00.000Z'),
			fruit: 'bananas',
			value: 83
		},
		{
			date: new Date('2024-12-09T18:00:00.000Z'),
			fruit: 'oranges',
			value: 24
		},
		{
			date: new Date('2024-12-10T18:00:00.000Z'),
			fruit: 'apples',
			value: 60
		},
		{
			date: new Date('2024-12-10T18:00:00.000Z'),
			fruit: 'bananas',
			value: 83
		},
		{
			date: new Date('2024-12-10T18:00:00.000Z'),
			fruit: 'oranges',
			value: 73
		},
		{
			date: new Date('2024-12-11T18:00:00.000Z'),
			fruit: 'apples',
			value: 15
		},
		{
			date: new Date('2024-12-11T18:00:00.000Z'),
			fruit: 'bananas',
			value: 30
		},
		{
			date: new Date('2024-12-11T18:00:00.000Z'),
			fruit: 'oranges',
			value: 96
		},
		{
			date: new Date('2024-12-12T18:00:00.000Z'),
			fruit: 'apples',
			value: 71
		},
		{
			date: new Date('2024-12-12T18:00:00.000Z'),
			fruit: 'bananas',
			value: 16
		},
		{
			date: new Date('2024-12-12T18:00:00.000Z'),
			fruit: 'oranges',
			value: 38
		},
		{
			date: new Date('2024-12-13T18:00:00.000Z'),
			fruit: 'apples',
			value: 72
		},
		{
			date: new Date('2024-12-13T18:00:00.000Z'),
			fruit: 'bananas',
			value: 39
		},
		{
			date: new Date('2024-12-13T18:00:00.000Z'),
			fruit: 'oranges',
			value: 15
		},
		{
			date: new Date('2024-12-14T18:00:00.000Z'),
			fruit: 'apples',
			value: 10
		},
		{
			date: new Date('2024-12-14T18:00:00.000Z'),
			fruit: 'bananas',
			value: 81
		},
		{
			date: new Date('2024-12-14T18:00:00.000Z'),
			fruit: 'oranges',
			value: 60
		},
		{
			date: new Date('2024-12-15T18:00:00.000Z'),
			fruit: 'apples',
			value: 78
		},
		{
			date: new Date('2024-12-15T18:00:00.000Z'),
			fruit: 'bananas',
			value: 32
		},
		{
			date: new Date('2024-12-15T18:00:00.000Z'),
			fruit: 'oranges',
			value: 91
		},
		{
			date: new Date('2024-12-16T18:00:00.000Z'),
			fruit: 'apples',
			value: 13
		},
		{
			date: new Date('2024-12-16T18:00:00.000Z'),
			fruit: 'bananas',
			value: 31
		},
		{
			date: new Date('2024-12-16T18:00:00.000Z'),
			fruit: 'oranges',
			value: 32
		},
		{
			date: new Date('2024-12-17T18:00:00.000Z'),
			fruit: 'apples',
			value: 24
		},
		{
			date: new Date('2024-12-17T18:00:00.000Z'),
			fruit: 'bananas',
			value: 94
		},
		{
			date: new Date('2024-12-17T18:00:00.000Z'),
			fruit: 'oranges',
			value: 52
		},
		{
			date: new Date('2024-12-18T18:00:00.000Z'),
			fruit: 'apples',
			value: 16
		},
		{
			date: new Date('2024-12-18T18:00:00.000Z'),
			fruit: 'bananas',
			value: 29
		},
		{
			date: new Date('2024-12-18T18:00:00.000Z'),
			fruit: 'oranges',
			value: 71
		},
		{
			date: new Date('2024-12-19T18:00:00.000Z'),
			fruit: 'apples',
			value: 40
		},
		{
			date: new Date('2024-12-19T18:00:00.000Z'),
			fruit: 'bananas',
			value: 12
		},
		{
			date: new Date('2024-12-19T18:00:00.000Z'),
			fruit: 'oranges',
			value: 91
		},
		{
			date: new Date('2024-12-20T18:00:00.000Z'),
			fruit: 'apples',
			value: 19
		},
		{
			date: new Date('2024-12-20T18:00:00.000Z'),
			fruit: 'bananas',
			value: 36
		},
		{
			date: new Date('2024-12-20T18:00:00.000Z'),
			fruit: 'oranges',
			value: 47
		},
		{
			date: new Date('2024-12-21T18:00:00.000Z'),
			fruit: 'apples',
			value: 42
		},
		{
			date: new Date('2024-12-21T18:00:00.000Z'),
			fruit: 'bananas',
			value: 93
		},
		{
			date: new Date('2024-12-21T18:00:00.000Z'),
			fruit: 'oranges',
			value: 97
		},
		{
			date: new Date('2024-12-22T18:00:00.000Z'),
			fruit: 'apples',
			value: 40
		},
		{
			date: new Date('2024-12-22T18:00:00.000Z'),
			fruit: 'bananas',
			value: 15
		},
		{
			date: new Date('2024-12-22T18:00:00.000Z'),
			fruit: 'oranges',
			value: 38
		},
		{
			date: new Date('2024-12-23T18:00:00.000Z'),
			fruit: 'apples',
			value: 55
		},
		{
			date: new Date('2024-12-23T18:00:00.000Z'),
			fruit: 'bananas',
			value: 91
		},
		{
			date: new Date('2024-12-23T18:00:00.000Z'),
			fruit: 'oranges',
			value: 30
		},
		{
			date: new Date('2024-12-24T18:00:00.000Z'),
			fruit: 'apples',
			value: 20
		},
		{
			date: new Date('2024-12-24T18:00:00.000Z'),
			fruit: 'bananas',
			value: 61
		},
		{
			date: new Date('2024-12-24T18:00:00.000Z'),
			fruit: 'oranges',
			value: 55
		},
		{
			date: new Date('2024-12-25T18:00:00.000Z'),
			fruit: 'apples',
			value: 43
		},
		{
			date: new Date('2024-12-25T18:00:00.000Z'),
			fruit: 'bananas',
			value: 72
		},
		{
			date: new Date('2024-12-25T18:00:00.000Z'),
			fruit: 'oranges',
			value: 68
		},
		{
			date: new Date('2024-12-26T18:00:00.000Z'),
			fruit: 'apples',
			value: 95
		},
		{
			date: new Date('2024-12-26T18:00:00.000Z'),
			fruit: 'bananas',
			value: 97
		},
		{
			date: new Date('2024-12-26T18:00:00.000Z'),
			fruit: 'oranges',
			value: 29
		},
		{
			date: new Date('2024-12-27T18:00:00.000Z'),
			fruit: 'apples',
			value: 88
		},
		{
			date: new Date('2024-12-27T18:00:00.000Z'),
			fruit: 'bananas',
			value: 43
		},
		{
			date: new Date('2024-12-27T18:00:00.000Z'),
			fruit: 'oranges',
			value: 33
		},
		{
			date: new Date('2024-12-28T18:00:00.000Z'),
			fruit: 'apples',
			value: 34
		},
		{
			date: new Date('2024-12-28T18:00:00.000Z'),
			fruit: 'bananas',
			value: 61
		},
		{
			date: new Date('2024-12-28T18:00:00.000Z'),
			fruit: 'oranges',
			value: 45
		},
		{
			date: new Date('2024-12-29T18:00:00.000Z'),
			fruit: 'apples',
			value: 48
		},
		{
			date: new Date('2024-12-29T18:00:00.000Z'),
			fruit: 'bananas',
			value: 99
		},
		{
			date: new Date('2024-12-29T18:00:00.000Z'),
			fruit: 'oranges',
			value: 26
		},
		{
			date: new Date('2024-12-30T18:00:00.000Z'),
			fruit: 'apples',
			value: 34
		},
		{
			date: new Date('2024-12-30T18:00:00.000Z'),
			fruit: 'bananas',
			value: 41
		},
		{
			date: new Date('2024-12-30T18:00:00.000Z'),
			fruit: 'oranges',
			value: 72
		},
		{
			date: new Date('2024-12-31T18:00:00.000Z'),
			fruit: 'apples',
			value: 59
		},
		{
			date: new Date('2024-12-31T18:00:00.000Z'),
			fruit: 'bananas',
			value: 90
		},
		{
			date: new Date('2024-12-31T18:00:00.000Z'),
			fruit: 'oranges',
			value: 76
		},
		{
			date: new Date('2025-01-01T18:00:00.000Z'),
			fruit: 'apples',
			value: 10
		},
		{
			date: new Date('2025-01-01T18:00:00.000Z'),
			fruit: 'bananas',
			value: 44
		},
		{
			date: new Date('2025-01-01T18:00:00.000Z'),
			fruit: 'oranges',
			value: 14
		},
		{
			date: new Date('2025-01-02T18:00:00.000Z'),
			fruit: 'apples',
			value: 41
		},
		{
			date: new Date('2025-01-02T18:00:00.000Z'),
			fruit: 'bananas',
			value: 11
		},
		{
			date: new Date('2025-01-02T18:00:00.000Z'),
			fruit: 'oranges',
			value: 47
		},
		{
			date: new Date('2025-01-03T18:00:00.000Z'),
			fruit: 'apples',
			value: 83
		},
		{
			date: new Date('2025-01-03T18:00:00.000Z'),
			fruit: 'bananas',
			value: 68
		},
		{
			date: new Date('2025-01-03T18:00:00.000Z'),
			fruit: 'oranges',
			value: 97
		},
		{
			date: new Date('2025-01-04T18:00:00.000Z'),
			fruit: 'apples',
			value: 71
		},
		{
			date: new Date('2025-01-04T18:00:00.000Z'),
			fruit: 'bananas',
			value: 35
		},
		{
			date: new Date('2025-01-04T18:00:00.000Z'),
			fruit: 'oranges',
			value: 47
		},
		{
			date: new Date('2025-01-05T18:00:00.000Z'),
			fruit: 'apples',
			value: 42
		},
		{
			date: new Date('2025-01-05T18:00:00.000Z'),
			fruit: 'bananas',
			value: 80
		},
		{
			date: new Date('2025-01-05T18:00:00.000Z'),
			fruit: 'oranges',
			value: 28
		},
		{
			date: new Date('2025-01-06T18:00:00.000Z'),
			fruit: 'apples',
			value: 97
		},
		{
			date: new Date('2025-01-06T18:00:00.000Z'),
			fruit: 'bananas',
			value: 49
		},
		{
			date: new Date('2025-01-06T18:00:00.000Z'),
			fruit: 'oranges',
			value: 10
		},
		{
			date: new Date('2025-01-07T18:00:00.000Z'),
			fruit: 'apples',
			value: 15
		},
		{
			date: new Date('2025-01-07T18:00:00.000Z'),
			fruit: 'bananas',
			value: 54
		},
		{
			date: new Date('2025-01-07T18:00:00.000Z'),
			fruit: 'oranges',
			value: 27
		}
	];

	const keys = ['apples', 'bananas', 'oranges'];

	const multiSeriesWideData = pivotWider(multiSeriesData, 'date', 'fruit', 'value');
</script>


<div class="h-[300px] rounded border p-4">
	<LineChart
		data={multiSeriesData}
		x="date"
		y="value"
		series={[
			{ key: 'apples', color: 'hsl(var(--color-error-500))' },
			{ key: 'bananas', color: 'hsl(var(--color-success-500))' },
			{ key: 'oranges', color: 'hsl(var(--color-warning-500))' }
		]}
		tooltip={{ mode: 'voronoi' }}
	>
		<svelte:fragment slot="marks" let:series let:tooltip>
			{#each series as s}
				{@const color =
					tooltip.data == null || tooltip.data.fruit === s.key
						? s.color
						: 'hsl(0 0 50 / 20%)'}
				<Spline data={multiSeriesWideData} y={s.key} class="stroke-2" stroke={color} />
			{/each}
		</svelte:fragment>

		<svelte:fragment slot="highlight" let:series let:tooltip>
			<!-- TODO: Remove [...] type hack to make svelte-check happy -->
			{@const activeSeriesColor = [...series].find((s) => s.key === tooltip.data?.fruit)?.color}
			<Highlight lines points={{ fill: activeSeriesColor }} />
		</svelte:fragment>

		<svelte:fragment slot="tooltip" let:series let:tooltip let:x>
			<!-- TODO: Remove [...] type hack to make svelte-check happy -->
			{@const activeSeriesColor = [...series].find((s) => s.key === tooltip.data?.fruit)?.color}
			<Tooltip.Root let:data>
				<Tooltip.Header>{format(x(data))}</Tooltip.Header>
				<Tooltip.List>
					<Tooltip.Item label={data.fruit} value={data.value} color={activeSeriesColor} />
				</Tooltip.List>
			</Tooltip.Root>
		</svelte:fragment>
	</LineChart>
</div>
