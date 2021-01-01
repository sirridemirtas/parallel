import React from "react"
import { useTable } from "react-table"

/*function Table({ ...props }) {

	return (
		<div className={cn(styles.table, props.className)}>
			table
		</div>
	)
}*/

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	})

	// Render the UI for your table
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map(cell => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

function Yess() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'Name',
				columns: [
					{
						Header: 'First Name',
						accessor: 'firstName',
					},
					{
						Header: 'Last Name',
						accessor: 'lastName',
					},
				],
			},
			{
				Header: 'Info',
				columns: [
					{
						Header: 'Age',
						accessor: 'age',
					},
					{
						Header: 'Visits',
						accessor: 'visits',
					},
					{
						Header: 'Status',
						accessor: 'status',
					},
					{
						Header: 'Profile Progress',
						accessor: 'progress',
					},
				],
			},
		],
		[]
	)

	const data = React.useMemo(() => ([
		{
			firstName: 'temper-39do4',
			lastName: 'arch-qjfic',
			age: 1,
			visits: 76,
			progress: 16,
			status: 'single',
			subRows: undefined
		},
		{
			firstName: 'delivery-0x538',
			lastName: 'jam-8hwta',
			age: 1,
			visits: 13,
			progress: 99,
			status: 'single',
			subRows: undefined
		}
	]), [])

	return (
		<Table columns={columns} data={data} />
	)
}

export default Yess