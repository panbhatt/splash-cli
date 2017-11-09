#! /usr/bin/env node

// Bin file, for client/s;
const client = require('../client');
const Meow = require('meow');
const chalk = require('chalk');
const helpmenu = require('../libs/helpmenu');

const cli = new Meow(helpmenu, {
	flags: {
		collection: {type: 'string'},
		size: {
			type: 'string',
			default: 'full'
		},
		featured: {type: 'boolean'},
		quiet: {type: 'boolean'},
		user: {type: 'string'},
		settings: {type: 'boolean'},
		id: {type: 'string'},
		query: {type: 'string'},
		orientation: {type: 'string'},
		save: {type: 'boolean'},
		info: {type: 'boolean'}
	},
	aliases: {
		h: 'help',
		v: 'version',
		u: 'user',
		q: 'quiet',
		o: 'orientation',
		f: 'featured',
		s: 'save',
		i: 'info'
	}
});

// Call the function
client(cli.input, cli.flags);
