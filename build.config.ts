import {sync} from 'fast-glob'

export default {
	entries: [...sync('src/**/*.ts')]
}