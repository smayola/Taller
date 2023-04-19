IotLoRaNode.SetRegion(region.EU868)
IotLoRaNode.InitialiseRadio(
"260BFA27",
"4F5C0EB2A5CC66289012C54818796DA6",
"AF1083E98D5CA7F6867488A5529DC78B",
SpreadingFactors.Nine
)
basic.showIcon(IconNames.SmallSquare)
IotLoRaNode.DigitalValue(true, Channels.Nine)
IotLoRaNode.loraTransmitPayload()
basic.showIcon(IconNames.Square)
basic.pause(30000)
IotLoRaNode.DigitalValue(false, Channels.Nine)
IotLoRaNode.loraTransmitPayload()
basic.showIcon(IconNames.Heart)
