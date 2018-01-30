# Splash Cli

![splash-cli](https://user-images.githubusercontent.com/16429579/35586570-79300ae8-05fb-11e8-8d37-17ff8cb6fa85.gif)
> **Get beautiful wallpapers from [unsplash](uwebsite)**

<br>

<!-- badges -->
[![Downloads](https://img.shields.io/npm/dt/splash-cli.svg)](https://npmjs.org/package/splash-cli) 
[![Build Status](https://camo.githubusercontent.com/46ec4f1f708c9a91132c190fa0f8918dadeaa04a/68747470733a2f2f7472617669732d63692e6f72672f5261776e6c792f73706c6173682d636c692e7376673f6272616e63683d6d6173746572)](/Rawnly/splash-cli/blob/master/build_url)
![node-version](https://img.shields.io/node/v/splash-cli.svg)
[![GitHub release](https://img.shields.io/github/release/rawnly/splash-cli.svg)](https://github.com/rawnly/splash-cli)
<!-- /badges -->


# Index
- [installation](#installation)
- [usage](#usage)
  - [source filters](#source-filter)
  - [search filters](#search-filters)
  - [subcommands](#subcommands-and-options)
  - [others](#other-flags)
- [note](#note)
- [contributors](#contributors)
- [related](#related)


## Installation
To install `splash-cli` you must use a **node package manager** such as [yarn](/Rawnly/splash-cli/blob/master/yarn) or [npm](/Rawnly/splash-cli/blob/master/npm).

```bash
	$ sudo npm install --global splash-cli

	# or via yarn

	$ sudo yarn global add splash-cli
```

## Usage
![help menu][help]
> Splash is easy and quick to use, just run `splash` to start.

### Source filter
- `-u --user <user>` - Grab random photo from user's photos.
- `-f --featured` - Grab random photo from featured photos.
- `--collection <id>` - Grab random photo from given collection.
- `--id <id|url>` - Grab photo by ID.

### Search Filters
- `--query <keywords>` - Grab random photo that match with the given query.
- `-o --orientation <squarish|landscape|portrait>` - Grab random photo that match with given orientation.

### Subcommands and options
- `list [extra sub-flags]`- Return the list of downloaded photos.
	- `--export` - Save the list to a JSON file.
	- `--out` - Output file name.
- `restore` - Restore all settings to default.
- `settings [setting]` - Setup `splash-cli` settings.
- `get-settings` - Get current settings.

#### Other flags
- `-q --quiet` - No output / loaders.
- `-s --save` - Save photo wihtout set it as wallpaper.
- `-i --info` - Display more infos about the photo.
- `--size <raw|full|regular|thumb>` - Select image size [default: full]

## Note 
If your node version is less than `8` and you don't want update, check out the [old branch][old-branch].

## Contributors
List of awesome people that have helped to keep this project alive.

- [mohnjatthews](http://github.com/mohnjatthews)
- [alecrust](http://github.com/alecrust)

## Related
- [Unsplash](https://unsplash.com/) - Free [do whatever you want](https://unsplash.com/license) high-resolution photos.
- [TheMovieDB Client](https://github.com/rawnly/tmdb-cli)

--------
<p align="center">
	<a href="https://twitter.com/rawnlydev">Twitter</a> • <a href="https://instagram.com/fede.vitale">Instagram</a>  • <a href="https://github.com/rawnly">GitHub</a> 
</p>

[uwebsite]: https://unsplash.com
[desk]: https://github.com/rawnly/splashdesktop
[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh
[hyper]: https://github.com/zeit/hyper

[old-branch]: https://github.com/rawnly/splash-cli/tree/node%3C%3D7

<!-- [sample]: https://user-images.githubusercontent.com/16429579/33238935-ea273b0a-d297-11e7-9837-1de378645bd9.png -->

[sample]: https://i.imgur.com/o0eXz6F.gif

[help]: https://user-images.githubusercontent.com/16429579/33238956-68de7c6a-d298-11e7-841d-2da1c624fce8.png