# dio_codepuzzle
## Code Puzzle Made for Fivem

A puzzle that is like the original simon game where you have to remember the order of colors. It shows a sequence of colors that the player will have to re-enter. This can be used for hacks in robberies and such. 

It is colorblind Friendly!

## How to use: 

Embed this export into where you want to use the hack. You can customize how many colors you want the player to have to guess to land a successful hack.

You can test the hack using /colorpick in game to play around with before putting it into your scripts as long as it is set to true in the config. 
```lua
    --LegthOfGame = Number of colors the player will have to pick.     
    exports["dio_colorpick"]:colorpick(LengthOfGame,
        function() -- success
            print("success")
        end,
        function() -- failure
            print("failure")
        end)
```

## Preview:

![image](https://user-images.githubusercontent.com/21018537/212273063-bbd5176b-6e10-4ab7-92d8-ab44103062c1.png)



https://user-images.githubusercontent.com/21018537/212273150-c841dbc4-8f83-4675-abd1-a898a59db083.mp4


  


