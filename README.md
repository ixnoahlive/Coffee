<div align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/badge/license-MIT-ff8000"></a>
  <a href="/pulls"><img href="/pulls" src="https://img.shields.io/badge/pulls & issues-welcome-ff8000"></a>
  <a href="https://chattriggers.com"><img src="https://img.shields.io/badge/powered%20by-ChatTriggers-purple"></a>
  <br/><br/>
  <a href="https://www.chattriggers.com/modules/v/Coffee"><img src="https://i.imgur.com/bdlqDXt.png" height="128"></a><br>
  <h3>☕ Coffee</h3>
  <p>ChatTriggers Utility Library</p>
</div>
<hr>

Coffee is a ChatTriggers library with many utilities.

With Coffee, you can write your modules faster and stop wasting time porting your utility functions. Maybe some of the functions can even give you some inspiration on things you can do with your module. If you've got anything **urgent** ping @ixNoah#5701 in the [ChatTriggers Discord Server](https://discord.com/invite/ChatTriggers).

## Installation

If you want to install the module's latest stable release you can simply head [here](https://chattriggers.com/modules/v/Coffee) or type `/ct import Coffee` in Minecraft with the ChatTriggers mod to import it. After this is done, you're all set to use Coffee in your projects using this magical one liner.

Please keep in mind you should also add it as a dependency in your project's `metadata.json` file. 

```js
import Coffee from 'Coffee'
```

You can now use Coffee and it's functions using the `Coffee` object. Simply type something like `Coffee.functionName()` and it'll run perfectly fine.

## Examples

You can find examples on how to use Coffee in [examples.js](/examples.js). But here's one anyway. Keep in mind it may be outdated.

Add this line to your `metadata.json` file to import the latest stable release from Coffee.
```json
"requires":["Coffee"]
```

You can now use Coffee's functions like in the code below. If these functions don't exist, you may have to do some debugging or [open an issue](/issues).

```js
import Coffee from 'Coffee'

const Messages = [
    'Hello World',
    'Foobar',
    'Bingus'
]

function runOnWorldLoad() {
    ChatLib.chat(Coffee.pickRandom(Messages)) // Pseudorandom message from array
}

Coffee.runOnTrue(World.isLoaded, runOnWorldLoad, 1000) // Check if world is loaded every 1000ms (1s) and if it is run the function
```

If you're experiencing a problem with these examples you should [open an issue](/issues) and we'll help you out.
Please make sure to tag it as "**documentation**" and use a good title and description to describe it.

### Useful Links

- [Install ChatTriggers](https://chattriggers.com)

- [ChatTriggers Discord](https://discord.com/invite/ChatTriggers)

- [Coffee Module Page](https://chattriggers.com/modules/v/coffee)

### License

- The codebase for Coffee is licensed under [MIT](https://opensource.org/license/mit/).

- The Coffee Logo & other branding materials are not licensed under MIT and may not be used outside of their assigned purpose.
