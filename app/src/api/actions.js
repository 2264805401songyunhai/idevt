import { post } from '@/utils/request'
import api from './api'
import qs from 'qs'

export function reg(data) {
	return post(api.reg, qs.stringify(data))
}
export function log(data) {
	return post(api.log, qs.stringify(data))
}
export function listDate(data) {
	return post(api.list, qs.stringify(data))
}
export function addset(data) {
	return post(api.addset, qs.stringify(data))
}
