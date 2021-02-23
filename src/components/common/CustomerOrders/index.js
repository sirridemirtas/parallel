import { useMemo } from "react"
import { useTable } from "react-table"

function CustomerOrders({ cluster, className }) {

	const data = useMemo(() => [
		{
			"id": "519",
			"customerID": "1130",
			"accountID": "1",
			"productID": "1",
			"quantity": "3.00",
			"amount": "700.00",
			"statusID": "1",
			"description": "",
			"createdAt": "2020-08-30 15:57:08",
			"updatedAt": "2020-09-04 14:47:15",
			"status": "Teslim Edildi",
			"name": "Apple iPhone 12",
			"sku": "RJ45",
			"price": "250",
			"unitAbbr": "ad.",
			"discount": "50"
		}
	], []
	)

	const columns = useMemo(
		() => [
			{
				Header: 'Ürün',
				accessor: 'name'
			},
			{
				Header: 'Kod',
				accessor: 'sku'
			},
			{
				Header: 'Miktar',
				accessor: (row) => (
					`${row["quantity"]} ${row["unitAbbr"]}`
				)
			},
			{
				Header: 'Birim Fiyatı',
				accessor: 'price'
			},
			{
				Header: 'Ara Toplam',
				accessor: '750'
			},
			{
				Header: 'İndirim',
				accessor: 'discount'
			},
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
				accessor: 'createdAt',
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

export default CustomerOrders