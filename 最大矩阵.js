function rectangle(arr) {
	let result = []
	let reg = /1{2,}/g
	// 把每一行连续的1挑选出来，并记录好起始点和截止点
	arr = arr.map(item => {
		let str = item.join('')
		let r = reg.exec(str)
		let rs = []
		while (r) {
			rs.push([r.index, r.index + r[0].length - 1])
			r = reg.exec(str)
		}
		return rs
	})
	// 每一次寻找最大矩形，找不到交叉点就结束了
	while (arr.length > 1) {
		maxRect([].concat(arr), result)
		arr.pop()
	}
	// 为什么有这一行，理论上arr已经为1行了
	// maxRect(arr, result)

	let max = 0
	let item = result.pop()
	while (item) {
		if (item > max) {
			max = item
		}
		item = result.pop()
	}
	console.log(max > 0 ? max : -1)
}
let maxRect = (arr, result = [], n = 1) => {
	let top = arr.pop()
	let next = arr.pop()
	let tt
	let nn
	let start
	let end
	let width = 1
	let maxWidth = 1
	let points = [];
	// 表示处理了几行，top和next是2行，n从1开始，所以首先n++
	n++
	//每次有相交都求值
	if (n >= 3) {
		let width = 1;
		for (let i = 0; i < top.length; i++) {
			let value = top[i][1] - top[i][0] + 1;
			if (value > width) {
				width = value
			}
		}
		result.push((n - 1) * width)
	}
	// 计算相邻的两行1的交叉，比如 0111001和0011000，交叉后成 11即[2,3]
	for (let i = 0, il = top.length; i < il; i++) {
		tt = top[i]
		for (let j = 0, jl = next.length; j < jl; j++) {
			nn = next[j]
			width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
			if (width >= maxWidth) {
				//maxWidth = width

				start = Math.max(tt[0], nn[0])
				end = Math.min(tt[1], nn[1])
				points.push([start, end])
			}
		}
	}
	if (points.length) {
		if (arr.length) {
			arr.push(points);
			maxRect(arr, result, n)
		} else {
			let width = 1;
			for (let i = 0; i < points.length; i++) {
				let value = points[i][1] - points[i][0] + 1;
				if (value > width) {
					width = value
				}
			}
			result.push(n * width)
		}
	}
}
let input = [
	['1', '1', '0', '0', '0', '0'], ['1', '1', '0', '0', '0', '0'], ['1', '1', '0', '1', '1', '1'], ['1', '1', '0', '1', '1', '1']
]
rectangle(input)