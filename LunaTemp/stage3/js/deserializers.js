var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointSpring' )
  var i271 = data
  i270.spring = i271[0]
  i270.damper = i271[1]
  i270.targetPosition = i271[2]
  return i270
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointMotor' )
  var i273 = data
  i272.m_TargetVelocity = i273[0]
  i272.m_Force = i273[1]
  i272.m_FreeSpin = i273[2]
  return i272
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointLimits' )
  var i275 = data
  i274.m_Min = i275[0]
  i274.m_Max = i275[1]
  i274.m_Bounciness = i275[2]
  i274.m_BounceMinVelocity = i275[3]
  i274.m_ContactDistance = i275[4]
  i274.minBounce = i275[5]
  i274.maxBounce = i275[6]
  return i274
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointDrive' )
  var i277 = data
  i276.m_PositionSpring = i277[0]
  i276.m_PositionDamper = i277[1]
  i276.m_MaximumForce = i277[2]
  return i276
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i279 = data
  i278.m_Spring = i279[0]
  i278.m_Damper = i279[1]
  return i278
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i281 = data
  i280.m_Limit = i281[0]
  i280.m_Bounciness = i281[1]
  i280.m_ContactDistance = i281[2]
  return i280
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i283 = data
  i282.m_ExtremumSlip = i283[0]
  i282.m_ExtremumValue = i283[1]
  i282.m_AsymptoteSlip = i283[2]
  i282.m_AsymptoteValue = i283[3]
  i282.m_Stiffness = i283[4]
  return i282
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i285 = data
  i284.m_LowerAngle = i285[0]
  i284.m_UpperAngle = i285[1]
  return i284
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i287 = data
  i286.m_MotorSpeed = i287[0]
  i286.m_MaximumMotorTorque = i287[1]
  return i286
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i289 = data
  i288.m_DampingRatio = i289[0]
  i288.m_Frequency = i289[1]
  i288.m_Angle = i289[2]
  return i288
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i291 = data
  i290.m_LowerTranslation = i291[0]
  i290.m_UpperTranslation = i291[1]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i292 = root || new pc.UnityMaterial()
  var i293 = data
  i292.name = i293[0]
  request.r(i293[1], i293[2], 0, i292, 'shader')
  i292.renderQueue = i293[3]
  i292.enableInstancing = !!i293[4]
  var i295 = i293[5]
  var i294 = []
  for(var i = 0; i < i295.length; i += 1) {
    i294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i295[i + 0]) );
  }
  i292.floatParameters = i294
  var i297 = i293[6]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i297[i + 0]) );
  }
  i292.colorParameters = i296
  var i299 = i293[7]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i299[i + 0]) );
  }
  i292.vectorParameters = i298
  var i301 = i293[8]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i301[i + 0]) );
  }
  i292.textureParameters = i300
  var i303 = i293[9]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i303[i + 0]) );
  }
  i292.materialFlags = i302
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i307 = data
  i306.name = i307[0]
  i306.value = i307[1]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i311 = data
  i310.name = i311[0]
  i310.value = new pc.Color(i311[1], i311[2], i311[3], i311[4])
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i315 = data
  i314.name = i315[0]
  i314.value = new pc.Vec4( i315[1], i315[2], i315[3], i315[4] )
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i319 = data
  i318.name = i319[0]
  request.r(i319[1], i319[2], 0, i318, 'value')
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i323 = data
  i322.name = i323[0]
  i322.enabled = !!i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i325 = data
  i324.name = i325[0]
  i324.halfPrecision = !!i325[1]
  i324.vertexCount = i325[2]
  i324.aabb = i325[3]
  var i327 = i325[4]
  var i326 = []
  for(var i = 0; i < i327.length; i += 1) {
    i326.push( !!i327[i + 0] );
  }
  i324.streams = i326
  i324.vertices = i325[5]
  var i329 = i325[6]
  var i328 = []
  for(var i = 0; i < i329.length; i += 1) {
    i328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i329[i + 0]) );
  }
  i324.subMeshes = i328
  var i331 = i325[7]
  var i330 = []
  for(var i = 0; i < i331.length; i += 16) {
    i330.push( new pc.Mat4().setData(i331[i + 0], i331[i + 1], i331[i + 2], i331[i + 3],  i331[i + 4], i331[i + 5], i331[i + 6], i331[i + 7],  i331[i + 8], i331[i + 9], i331[i + 10], i331[i + 11],  i331[i + 12], i331[i + 13], i331[i + 14], i331[i + 15]) );
  }
  i324.bindposes = i330
  var i333 = i325[8]
  var i332 = []
  for(var i = 0; i < i333.length; i += 1) {
    i332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i333[i + 0]) );
  }
  i324.blendShapes = i332
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i339 = data
  i338.triangles = i339[0]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i345 = data
  i344.name = i345[0]
  var i347 = i345[1]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i347[i + 0]) );
  }
  i344.frames = i346
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i349 = data
  i348.pivot = new pc.Vec2( i349[0], i349[1] )
  i348.anchorMin = new pc.Vec2( i349[2], i349[3] )
  i348.anchorMax = new pc.Vec2( i349[4], i349[5] )
  i348.sizeDelta = new pc.Vec2( i349[6], i349[7] )
  i348.anchoredPosition3D = new pc.Vec3( i349[8], i349[9], i349[10] )
  i348.rotation = new pc.Quat(i349[11], i349[12], i349[13], i349[14])
  i348.scale = new pc.Vec3( i349[15], i349[16], i349[17] )
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i351 = data
  i350.cullTransparentMesh = !!i351[0]
  return i350
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.UI.Image' )
  var i353 = data
  request.r(i353[0], i353[1], 0, i352, 'm_Sprite')
  i352.m_Type = i353[2]
  i352.m_PreserveAspect = !!i353[3]
  i352.m_FillCenter = !!i353[4]
  i352.m_FillMethod = i353[5]
  i352.m_FillAmount = i353[6]
  i352.m_FillClockwise = !!i353[7]
  i352.m_FillOrigin = i353[8]
  i352.m_UseSpriteMesh = !!i353[9]
  i352.m_PixelsPerUnitMultiplier = i353[10]
  request.r(i353[11], i353[12], 0, i352, 'm_Material')
  i352.m_Maskable = !!i353[13]
  i352.m_Color = new pc.Color(i353[14], i353[15], i353[16], i353[17])
  i352.m_RaycastTarget = !!i353[18]
  i352.m_RaycastPadding = new pc.Vec4( i353[19], i353[20], i353[21], i353[22] )
  return i352
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i354 = root || request.c( 'FixedJoystick' )
  var i355 = data
  request.r(i355[0], i355[1], 0, i354, 'background')
  i354.handleRange = i355[2]
  i354.deadZone = i355[3]
  i354.axisOptions = i355[4]
  i354.snapX = !!i355[5]
  i354.snapY = !!i355[6]
  request.r(i355[7], i355[8], 0, i354, 'handle')
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i357 = data
  i356.name = i357[0]
  i356.tagId = i357[1]
  i356.enabled = !!i357[2]
  i356.isStatic = !!i357[3]
  i356.layer = i357[4]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i359 = data
  i358.name = i359[0]
  i358.width = i359[1]
  i358.height = i359[2]
  i358.mipmapCount = i359[3]
  i358.anisoLevel = i359[4]
  i358.filterMode = i359[5]
  i358.hdr = !!i359[6]
  i358.format = i359[7]
  i358.wrapMode = i359[8]
  i358.alphaIsTransparency = !!i359[9]
  i358.alphaSource = i359[10]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i361 = data
  i360.name = i361[0]
  i360.atlasId = i361[1]
  i360.mipmapCount = i361[2]
  i360.hdr = !!i361[3]
  i360.size = i361[4]
  i360.anisoLevel = i361[5]
  i360.filterMode = i361[6]
  i360.wrapMode = i361[7]
  var i363 = i361[8]
  var i362 = []
  for(var i = 0; i < i363.length; i += 4) {
    i362.push( UnityEngine.Rect.MinMaxRect(i363[i + 0], i363[i + 1], i363[i + 2], i363[i + 3]) );
  }
  i360.rects = i362
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i367 = data
  i366.name = i367[0]
  i366.index = i367[1]
  i366.startup = !!i367[2]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i369 = data
  i368.position = new pc.Vec3( i369[0], i369[1], i369[2] )
  i368.scale = new pc.Vec3( i369[3], i369[4], i369[5] )
  i368.rotation = new pc.Quat(i369[6], i369[7], i369[8], i369[9])
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i371 = data
  i370.enabled = !!i371[0]
  i370.aspect = i371[1]
  i370.orthographic = !!i371[2]
  i370.orthographicSize = i371[3]
  i370.backgroundColor = new pc.Color(i371[4], i371[5], i371[6], i371[7])
  i370.nearClipPlane = i371[8]
  i370.farClipPlane = i371[9]
  i370.fieldOfView = i371[10]
  i370.depth = i371[11]
  i370.clearFlags = i371[12]
  i370.cullingMask = i371[13]
  i370.rect = i371[14]
  request.r(i371[15], i371[16], 0, i370, 'targetTexture')
  i370.usePhysicalProperties = !!i371[17]
  i370.focalLength = i371[18]
  i370.sensorSize = new pc.Vec2( i371[19], i371[20] )
  i370.lensShift = new pc.Vec2( i371[21], i371[22] )
  i370.gateFit = i371[23]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i373 = data
  i372.enabled = !!i373[0]
  i372.type = i373[1]
  i372.color = new pc.Color(i373[2], i373[3], i373[4], i373[5])
  i372.cullingMask = i373[6]
  i372.intensity = i373[7]
  i372.range = i373[8]
  i372.spotAngle = i373[9]
  i372.shadows = i373[10]
  i372.shadowNormalBias = i373[11]
  i372.shadowBias = i373[12]
  i372.shadowStrength = i373[13]
  i372.shadowResolution = i373[14]
  i372.lightmapBakeType = i373[15]
  i372.renderMode = i373[16]
  request.r(i373[17], i373[18], 0, i372, 'cookie')
  i372.cookieSize = i373[19]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i375 = data
  request.r(i375[0], i375[1], 0, i374, 'sharedMesh')
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i377 = data
  request.r(i377[0], i377[1], 0, i376, 'additionalVertexStreams')
  i376.enabled = !!i377[2]
  request.r(i377[3], i377[4], 0, i376, 'sharedMaterial')
  var i379 = i377[5]
  var i378 = []
  for(var i = 0; i < i379.length; i += 2) {
  request.r(i379[i + 0], i379[i + 1], 2, i378, '')
  }
  i376.sharedMaterials = i378
  i376.receiveShadows = !!i377[6]
  i376.shadowCastingMode = i377[7]
  i376.sortingLayerID = i377[8]
  i376.sortingOrder = i377[9]
  i376.lightmapIndex = i377[10]
  i376.lightmapSceneIndex = i377[11]
  i376.lightmapScaleOffset = new pc.Vec4( i377[12], i377[13], i377[14], i377[15] )
  i376.lightProbeUsage = i377[16]
  i376.reflectionProbeUsage = i377[17]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i383 = data
  i382.center = new pc.Vec3( i383[0], i383[1], i383[2] )
  i382.radius = i383[3]
  i382.height = i383[4]
  i382.direction = i383[5]
  i382.enabled = !!i383[6]
  i382.isTrigger = !!i383[7]
  request.r(i383[8], i383[9], 0, i382, 'material')
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i385 = data
  i384.mass = i385[0]
  i384.drag = i385[1]
  i384.angularDrag = i385[2]
  i384.useGravity = !!i385[3]
  i384.isKinematic = !!i385[4]
  i384.constraints = i385[5]
  i384.maxAngularVelocity = i385[6]
  i384.collisionDetectionMode = i385[7]
  i384.interpolation = i385[8]
  return i384
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i386 = root || request.c( 'PlayerController' )
  var i387 = data
  request.r(i387[0], i387[1], 0, i386, 'joystick')
  request.r(i387[2], i387[3], 0, i386, 'rigid')
  i386.speed = i387[4]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i389 = data
  i388.enabled = !!i389[0]
  i388.planeDistance = i389[1]
  i388.referencePixelsPerUnit = i389[2]
  i388.isFallbackOverlay = !!i389[3]
  i388.renderMode = i389[4]
  i388.renderOrder = i389[5]
  i388.sortingLayerName = i389[6]
  i388.sortingOrder = i389[7]
  i388.scaleFactor = i389[8]
  request.r(i389[9], i389[10], 0, i388, 'worldCamera')
  i388.overrideSorting = !!i389[11]
  i388.pixelPerfect = !!i389[12]
  i388.targetDisplay = i389[13]
  i388.overridePixelPerfect = !!i389[14]
  return i388
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i391 = data
  i390.m_UiScaleMode = i391[0]
  i390.m_ReferencePixelsPerUnit = i391[1]
  i390.m_ScaleFactor = i391[2]
  i390.m_ReferenceResolution = new pc.Vec2( i391[3], i391[4] )
  i390.m_ScreenMatchMode = i391[5]
  i390.m_MatchWidthOrHeight = i391[6]
  i390.m_PhysicalUnit = i391[7]
  i390.m_FallbackScreenDPI = i391[8]
  i390.m_DefaultSpriteDPI = i391[9]
  i390.m_DynamicPixelsPerUnit = i391[10]
  i390.m_PresetInfoIsWorld = !!i391[11]
  return i390
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i393 = data
  i392.m_IgnoreReversedGraphics = !!i393[0]
  i392.m_BlockingObjects = i393[1]
  i392.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i393[2] )
  return i392
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i395 = data
  request.r(i395[0], i395[1], 0, i394, 'm_FirstSelected')
  i394.m_sendNavigationEvents = !!i395[2]
  i394.m_DragThreshold = i395[3]
  return i394
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i397 = data
  i396.m_HorizontalAxis = i397[0]
  i396.m_VerticalAxis = i397[1]
  i396.m_SubmitButton = i397[2]
  i396.m_CancelButton = i397[3]
  i396.m_InputActionsPerSecond = i397[4]
  i396.m_RepeatDelay = i397[5]
  i396.m_ForceModuleActive = !!i397[6]
  i396.m_SendPointerHoverToParent = !!i397[7]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i399 = data
  i398.enabled = !!i399[0]
  i398.isTrigger = !!i399[1]
  request.r(i399[2], i399[3], 0, i398, 'material')
  request.r(i399[4], i399[5], 0, i398, 'sharedMesh')
  i398.convex = !!i399[6]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i401 = data
  i400.center = new pc.Vec3( i401[0], i401[1], i401[2] )
  i400.size = new pc.Vec3( i401[3], i401[4], i401[5] )
  i400.enabled = !!i401[6]
  i400.isTrigger = !!i401[7]
  request.r(i401[8], i401[9], 0, i400, 'material')
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i403 = data
  i402.ambientIntensity = i403[0]
  i402.reflectionIntensity = i403[1]
  i402.ambientMode = i403[2]
  i402.ambientLight = new pc.Color(i403[3], i403[4], i403[5], i403[6])
  i402.ambientSkyColor = new pc.Color(i403[7], i403[8], i403[9], i403[10])
  i402.ambientGroundColor = new pc.Color(i403[11], i403[12], i403[13], i403[14])
  i402.ambientEquatorColor = new pc.Color(i403[15], i403[16], i403[17], i403[18])
  i402.fogColor = new pc.Color(i403[19], i403[20], i403[21], i403[22])
  i402.fogEndDistance = i403[23]
  i402.fogStartDistance = i403[24]
  i402.fogDensity = i403[25]
  i402.fog = !!i403[26]
  request.r(i403[27], i403[28], 0, i402, 'skybox')
  i402.fogMode = i403[29]
  var i405 = i403[30]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i405[i + 0]) );
  }
  i402.lightmaps = i404
  i402.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i403[31], i402.lightProbes)
  i402.lightmapsMode = i403[32]
  i402.mixedBakeMode = i403[33]
  i402.environmentLightingMode = i403[34]
  i402.ambientProbe = new pc.SphericalHarmonicsL2(i403[35])
  i402.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i403[36])
  i402.useReferenceAmbientProbe = !!i403[37]
  request.r(i403[38], i403[39], 0, i402, 'customReflection')
  request.r(i403[40], i403[41], 0, i402, 'defaultReflection')
  i402.defaultReflectionMode = i403[42]
  i402.defaultReflectionResolution = i403[43]
  i402.sunLightObjectId = i403[44]
  i402.pixelLightCount = i403[45]
  i402.defaultReflectionHDR = !!i403[46]
  i402.hasLightDataAsset = !!i403[47]
  i402.hasManualGenerate = !!i403[48]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'lightmapColor')
  request.r(i409[2], i409[3], 0, i408, 'lightmapDirection')
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i410 = root || new UnityEngine.LightProbes()
  var i411 = data
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i419 = data
  var i421 = i419[0]
  var i420 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i421.length; i += 1) {
    i420.add(i421[i + 0]);
  }
  i418.invalidShaderVariants = i420
  i418.name = i419[1]
  i418.guid = i419[2]
  var i423 = i419[3]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( i423[i + 0] );
  }
  i418.shaderDefinedKeywords = i422
  var i425 = i419[4]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i425[i + 0]) );
  }
  i418.passes = i424
  var i427 = i419[5]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i427[i + 0]) );
  }
  i418.usePasses = i426
  var i429 = i419[6]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i429[i + 0]) );
  }
  i418.defaultParameterValues = i428
  request.r(i419[7], i419[8], 0, i418, 'unityFallbackShader')
  i418.readDepth = !!i419[9]
  i418.isCreatedByShaderGraph = !!i419[10]
  i418.usedBatchUniforms = i419[11]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i436 = root || new pc.UnityShaderPass()
  var i437 = data
  i436.id = i437[0]
  i436.subShaderIndex = i437[1]
  i436.name = i437[2]
  i436.passType = i437[3]
  i436.usePass = !!i437[4]
  i436.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[5], i436.zTest)
  i436.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[6], i436.zWrite)
  i436.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[7], i436.culling)
  i436.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i437[8], i436.blending)
  i436.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i437[9], i436.alphaBlending)
  i436.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[10], i436.colorWriteMask)
  i436.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[11], i436.offsetUnits)
  i436.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[12], i436.offsetFactor)
  i436.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[13], i436.stencilRef)
  i436.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[14], i436.stencilReadMask)
  i436.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i437[15], i436.stencilWriteMask)
  i436.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i437[16], i436.stencilOp)
  i436.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i437[17], i436.stencilOpFront)
  i436.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i437[18], i436.stencilOpBack)
  var i439 = i437[19]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i439[i + 0]) );
  }
  i436.tags = i438
  var i441 = i437[20]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( i441[i + 0] );
  }
  i436.passDefinedKeywords = i440
  var i443 = i437[21]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i443[i + 0]) );
  }
  i436.passDefinedKeywordGroups = i442
  var i445 = i437[22]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i445[i + 0]) );
  }
  i436.variants = i444
  var i447 = i437[23]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i447[i + 0]) );
  }
  i436.excludedVariants = i446
  i436.hasDepthReader = !!i437[24]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i449 = data
  i448.val = i449[0]
  i448.name = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i451 = data
  i450.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[0], i450.src)
  i450.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[1], i450.dst)
  i450.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i451[2], i450.op)
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i453 = data
  i452.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i453[0], i452.pass)
  i452.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i453[1], i452.fail)
  i452.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i453[2], i452.zFail)
  i452.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i453[3], i452.comp)
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i457 = data
  i456.name = i457[0]
  i456.value = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i461 = data
  var i463 = i461[0]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( i463[i + 0] );
  }
  i460.keywords = i462
  i460.hasDiscard = !!i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i467 = data
  i466.passId = i467[0]
  i466.subShaderIndex = i467[1]
  var i469 = i467[2]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( i469[i + 0] );
  }
  i466.keywords = i468
  i466.vertexProgram = i467[3]
  i466.fragmentProgram = i467[4]
  i466.readDepth = !!i467[5]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'shader')
  i472.pass = i473[2]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i477 = data
  i476.name = i477[0]
  i476.type = i477[1]
  i476.value = new pc.Vec4( i477[2], i477[3], i477[4], i477[5] )
  i476.textureValue = i477[6]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'texture')
  i478.aabb = i479[3]
  i478.vertices = i479[4]
  i478.triangles = i479[5]
  i478.textureRect = UnityEngine.Rect.MinMaxRect(i479[6], i479[7], i479[8], i479[9])
  i478.packedRect = UnityEngine.Rect.MinMaxRect(i479[10], i479[11], i479[12], i479[13])
  i478.border = new pc.Vec4( i479[14], i479[15], i479[16], i479[17] )
  i478.transparency = i479[18]
  i478.bounds = i479[19]
  i478.pixelsPerUnit = i479[20]
  i478.textureWidth = i479[21]
  i478.textureHeight = i479[22]
  i478.nativeSize = new pc.Vec2( i479[23], i479[24] )
  i478.pivot = new pc.Vec2( i479[25], i479[26] )
  i478.textureRectOffset = new pc.Vec2( i479[27], i479[28] )
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i481 = data
  var i483 = i481[0]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i483[i + 0]) );
  }
  i480.files = i482
  i480.componentToPrefabIds = i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i487 = data
  i486.path = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'unityObject')
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i489 = data
  var i491 = i489[0]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i491[i + 0]) );
  }
  i488.scriptsExecutionOrder = i490
  var i493 = i489[1]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i493[i + 0]) );
  }
  i488.sortingLayers = i492
  var i495 = i489[2]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i495[i + 0]) );
  }
  i488.cullingLayers = i494
  i488.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i489[3], i488.timeSettings)
  i488.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i489[4], i488.physicsSettings)
  i488.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i489[5], i488.physics2DSettings)
  i488.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i489[6], i488.qualitySettings)
  i488.enableRealtimeShadows = !!i489[7]
  i488.enableAutoInstancing = !!i489[8]
  i488.enableDynamicBatching = !!i489[9]
  i488.lightmapEncodingQuality = i489[10]
  i488.desiredColorSpace = i489[11]
  var i497 = i489[12]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( i497[i + 0] );
  }
  i488.allTags = i496
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i501 = data
  i500.name = i501[0]
  i500.value = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i505 = data
  i504.id = i505[0]
  i504.name = i505[1]
  i504.value = i505[2]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i509 = data
  i508.id = i509[0]
  i508.name = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i511 = data
  i510.fixedDeltaTime = i511[0]
  i510.maximumDeltaTime = i511[1]
  i510.timeScale = i511[2]
  i510.maximumParticleTimestep = i511[3]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i513 = data
  i512.gravity = new pc.Vec3( i513[0], i513[1], i513[2] )
  i512.defaultSolverIterations = i513[3]
  i512.bounceThreshold = i513[4]
  i512.autoSyncTransforms = !!i513[5]
  i512.autoSimulation = !!i513[6]
  var i515 = i513[7]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i515[i + 0]) );
  }
  i512.collisionMatrix = i514
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i519 = data
  i518.enabled = !!i519[0]
  i518.layerId = i519[1]
  i518.otherLayerId = i519[2]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'material')
  i520.gravity = new pc.Vec2( i521[2], i521[3] )
  i520.positionIterations = i521[4]
  i520.velocityIterations = i521[5]
  i520.velocityThreshold = i521[6]
  i520.maxLinearCorrection = i521[7]
  i520.maxAngularCorrection = i521[8]
  i520.maxTranslationSpeed = i521[9]
  i520.maxRotationSpeed = i521[10]
  i520.baumgarteScale = i521[11]
  i520.baumgarteTOIScale = i521[12]
  i520.timeToSleep = i521[13]
  i520.linearSleepTolerance = i521[14]
  i520.angularSleepTolerance = i521[15]
  i520.defaultContactOffset = i521[16]
  i520.autoSimulation = !!i521[17]
  i520.queriesHitTriggers = !!i521[18]
  i520.queriesStartInColliders = !!i521[19]
  i520.callbacksOnDisable = !!i521[20]
  i520.reuseCollisionCallbacks = !!i521[21]
  i520.autoSyncTransforms = !!i521[22]
  var i523 = i521[23]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i523[i + 0]) );
  }
  i520.collisionMatrix = i522
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i527 = data
  i526.enabled = !!i527[0]
  i526.layerId = i527[1]
  i526.otherLayerId = i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i529 = data
  var i531 = i529[0]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i531[i + 0]) );
  }
  i528.qualityLevels = i530
  var i533 = i529[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( i533[i + 0] );
  }
  i528.names = i532
  i528.shadows = i529[2]
  i528.anisotropicFiltering = i529[3]
  i528.antiAliasing = i529[4]
  i528.lodBias = i529[5]
  i528.shadowCascades = i529[6]
  i528.shadowDistance = i529[7]
  i528.shadowmaskMode = i529[8]
  i528.shadowProjection = i529[9]
  i528.shadowResolution = i529[10]
  i528.softParticles = !!i529[11]
  i528.softVegetation = !!i529[12]
  i528.activeColorSpace = i529[13]
  i528.desiredColorSpace = i529[14]
  i528.masterTextureLimit = i529[15]
  i528.maxQueuedFrames = i529[16]
  i528.particleRaycastBudget = i529[17]
  i528.pixelLightCount = i529[18]
  i528.realtimeReflectionProbes = !!i529[19]
  i528.shadowCascade2Split = i529[20]
  i528.shadowCascade4Split = new pc.Vec3( i529[21], i529[22], i529[23] )
  i528.streamingMipmapsActive = !!i529[24]
  i528.vSyncCount = i529[25]
  i528.asyncUploadBufferSize = i529[26]
  i528.asyncUploadTimeSlice = i529[27]
  i528.billboardsFaceCameraPosition = !!i529[28]
  i528.shadowNearPlaneOffset = i529[29]
  i528.streamingMipmapsMemoryBudget = i529[30]
  i528.maximumLODLevel = i529[31]
  i528.streamingMipmapsAddAllCameras = !!i529[32]
  i528.streamingMipmapsMaxLevelReduction = i529[33]
  i528.streamingMipmapsRenderersPerFrame = i529[34]
  i528.resolutionScalingFixedDPIFactor = i529[35]
  i528.streamingMipmapsMaxFileIORequests = i529[36]
  i528.currentQualityLevel = i529[37]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i539 = data
  i538.weight = i539[0]
  i538.vertices = i539[1]
  i538.normals = i539[2]
  i538.tangents = i539[3]
  return i538
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"28":[29],"30":[29],"31":[29],"32":[29],"33":[29],"34":[29],"35":[36],"37":[9],"38":[17],"39":[17],"40":[17],"41":[17],"42":[17],"43":[17],"44":[17],"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[46],"53":[46],"54":[46],"55":[46],"56":[46],"57":[46],"58":[46],"59":[9],"60":[14],"61":[62],"63":[62],"19":[1],"64":[1],"65":[14,1],"66":[1,2],"67":[1],"68":[2,1],"69":[14],"70":[2,1],"71":[1],"72":[73],"74":[1],"75":[1],"21":[19],"4":[2,1],"76":[1],"20":[19],"77":[1],"78":[1],"79":[1],"80":[1],"81":[1],"82":[1],"83":[1],"84":[1],"85":[1],"86":[2,1],"87":[1],"88":[1],"89":[1],"90":[1],"91":[2,1],"92":[1],"93":[22],"94":[22],"23":[22],"95":[22],"96":[9],"97":[9],"98":[73],"99":[73]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","FixedJoystick","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","PlayerController","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.15f1";

Deserializers.productName = "PlayableTest";

Deserializers.lunaInitializationTime = "08/08/2023 03:22:37";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.2.0";

Deserializers.lunaSHA = "a655a1e01be315dbfa8d2e1b74c75f56b0112281";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "17623";

Deserializers.projectId = "c9cff327bd649014fac34b62073d9372";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableTest";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "e2d8e044-84bb-4620-92f9-71baef7d3b72";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

