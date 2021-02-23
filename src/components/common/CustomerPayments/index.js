import { useMemo } from "react"
import { useTable } from "react-table"

function CustomerPayments({ cluster, className, ...props }) {
	const data = useMemo(() => [
		{
			"id": "463",
			"accountID": "1",
			"assetID": null,
			"amount": "175.00",
			"paidAt": "2020-08-13 16:21:29",
			"description": ""
		},
		{
			"id": "466",
			"accountID": "1",
			"assetID": null,
			"amount": "120.00",
			"paidAt": "2020-08-15 15:39:09",
			"description": ""
		},
		{
			"id": "468",
			"accountID": "1",
			"assetID": null,
			"amount": "123.00",
			"paidAt": "2020-08-25 19:02:24",
			"description": "5432"
		},
		{
			"id": "471",
			"accountID": "1",
			"assetID": null,
			"amount": "120.00",
			"paidAt": "2020-09-06 17:50:57",
			"description": ""
		},
		{
			"id": "472",
			"accountID": "1",
			"assetID": null,
			"amount": "200.00",
			"paidAt": "2020-09-08 15:08:37",
			"description": ""
		}
	], []
	)

	const columns = useMemo(
		() => [
			{
				Header: 'Tutar',
				accessor: 'amount',
				Cell: props => (
					new Intl.NumberFormat(
						'tr-TR',
						{ style: 'currency', currency: 'TRY' }
					).format(props.value)
				)
			},
			{
				Header: 'Tarih',
				accessor: 'paidAt',
				Cell: props => (
					new Intl.DateTimeFormat('tr-TR').format(
						new Date(Date.parse(props.value.replace(/-/g, '/')))
					)
				)
			},
			{
				Header: 'Açıklama',
				accessor: 'description',
			}
		],
		[]
	)

	const tableInstance = useTable({ columns, data })

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance

	return (
		// apply the table props
		<div className="tableWrapper">

			<table {...getTableProps()}>
				<thead>
					{// Loop over the header rows
						headerGroups.map(headerGroup => (
							// Apply the header row props
							<tr {...headerGroup.getHeaderGroupProps()}>
								{// Loop over the headers in each row
									headerGroup.headers.map(column => (
										// Apply the header cell props
										<th {...column.getHeaderProps()}>
											{// Render the header
												column.render('Header')}
										</th>
									))}
							</tr>
						))}
				</thead>
				{/* Apply the table body props */}
				<tbody {...getTableBodyProps()}>
					{// Loop over the table rows
						rows.map(row => {
							// Prepare the row for display
							prepareRow(row)
							return (
								// Apply the row props
								<tr {...row.getRowProps()}>
									{// Loop over the rows cells
										row.cells.map(cell => {
											// Apply the cell props
											return (
												<td {...cell.getCellProps()}>
													{// Render the cell contents
														cell.render('Cell')}
												</td>
											)
										})}
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)

}

export default CustomerPayments