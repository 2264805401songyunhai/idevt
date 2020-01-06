import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
export default class componentName extends Component {
	render() {
		var nowDate = new Date();
		var year = nowDate.getFullYear();
		var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
			: nowDate.getMonth() + 1;
		var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
			.getDate();
		var dateStr = year + "-" + month + "-" + day;
		return (
			<div className="right_flexbodx">
				<div className="navBox">
					<p>
						当前位置 :  <Breadcrumb>
							<Breadcrumb.Item>系统</Breadcrumb.Item>
							<Breadcrumb.Item>
								<a href="#">施工单位</a>
							</Breadcrumb.Item>
						</Breadcrumb>
					</p>
					<p className="time">
						时间 : {
							dateStr
						}
					</p>
				</div>
			</div>
		)
	}
}
