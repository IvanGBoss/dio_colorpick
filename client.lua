local successCb
local failCb
local resultReceived = false

RegisterNUICallback('dio_colorpick:result', function(data, cb)
    SetNuiFocus(false, false)
    resultReceived = true
    if data.success then
        successCb()
    else
        failCb()
    end
    cb('ok')
end)

if Config.TestCommand then
    TriggerEvent('chat:addSuggestion', '/colorpick', 'Start the Color Pick Game.', {
        { name = "Length", help = "Length of Game" },
    })
    
    RegisterCommand('colorpick', function(source, args, raw)
        LengthOfGame = args[1]
        exports["dio_colorpick"]:colorpick(LengthOfGame,
        function() -- success
            print("success")
        end,
        function() -- failure
            print("failure")
        end)
    end)
end



exports('colorpick', function(LengthOfGame, success, fail)
    -- LengthOfGame = Number of colors the player will have to pick. 
    resultReceived = false
    successCb = success
    failCb = fail
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "Start",
        gameLen = LengthOfGame,
    })
end)