fx_version 'cerulean'
game 'gta5'

author 'Dioxazine'
version '1.0.0'


client_script 'client.lua'
server_script 'server.lua'
shared_script 'config.lua'


ui_page 'html/index.html'

files {
    'html/index.html',
    'html/index.js',
    'html/index.css',
    'html/images/*',
}

--[[
    LegthOfGame = Number of colors the player will have to pick.     
    exports["dio_colorpick"]:colorpick(LengthOfGame,
        function() -- success
            print("success")
        end,
        function() -- failure
            print("failure")
        end)
]]