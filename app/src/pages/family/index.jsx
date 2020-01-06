import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import dateStr from "@/component/time"
export default class extends Component {
	render() {
		return (
			<div className="right_flexbodx">
				<div className="navBox">
					<div className="div">
						当前位置 :  
						<Breadcrumb>
							<Breadcrumb.Item>系统</Breadcrumb.Item>
							<Breadcrumb.Item>家庭成员</Breadcrumb.Item>
						</Breadcrumb>
					</div>
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
