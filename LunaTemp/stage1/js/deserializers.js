var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.JointSpring' )
  var i287 = data
  i286.spring = i287[0]
  i286.damper = i287[1]
  i286.targetPosition = i287[2]
  return i286
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointMotor' )
  var i289 = data
  i288.m_TargetVelocity = i289[0]
  i288.m_Force = i289[1]
  i288.m_FreeSpin = i289[2]
  return i288
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointLimits' )
  var i291 = data
  i290.m_Min = i291[0]
  i290.m_Max = i291[1]
  i290.m_Bounciness = i291[2]
  i290.m_BounceMinVelocity = i291[3]
  i290.m_ContactDistance = i291[4]
  i290.minBounce = i291[5]
  i290.maxBounce = i291[6]
  return i290
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointDrive' )
  var i293 = data
  i292.m_PositionSpring = i293[0]
  i292.m_PositionDamper = i293[1]
  i292.m_MaximumForce = i293[2]
  return i292
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i295 = data
  i294.m_Spring = i295[0]
  i294.m_Damper = i295[1]
  return i294
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i296 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i297 = data
  i296.m_Limit = i297[0]
  i296.m_Bounciness = i297[1]
  i296.m_ContactDistance = i297[2]
  return i296
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i298 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i299 = data
  i298.m_ExtremumSlip = i299[0]
  i298.m_ExtremumValue = i299[1]
  i298.m_AsymptoteSlip = i299[2]
  i298.m_AsymptoteValue = i299[3]
  i298.m_Stiffness = i299[4]
  return i298
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i300 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i301 = data
  i300.m_LowerAngle = i301[0]
  i300.m_UpperAngle = i301[1]
  return i300
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i302 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i303 = data
  i302.m_MotorSpeed = i303[0]
  i302.m_MaximumMotorTorque = i303[1]
  return i302
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i304 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i305 = data
  i304.m_DampingRatio = i305[0]
  i304.m_Frequency = i305[1]
  i304.m_Angle = i305[2]
  return i304
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i306 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i307 = data
  i306.m_LowerTranslation = i307[0]
  i306.m_UpperTranslation = i307[1]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i308 = root || new pc.UnityMaterial()
  var i309 = data
  i308.name = i309[0]
  request.r(i309[1], i309[2], 0, i308, 'shader')
  i308.renderQueue = i309[3]
  i308.enableInstancing = !!i309[4]
  var i311 = i309[5]
  var i310 = []
  for(var i = 0; i < i311.length; i += 1) {
    i310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i311[i + 0]) );
  }
  i308.floatParameters = i310
  var i313 = i309[6]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i313[i + 0]) );
  }
  i308.colorParameters = i312
  var i315 = i309[7]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i315[i + 0]) );
  }
  i308.vectorParameters = i314
  var i317 = i309[8]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i317[i + 0]) );
  }
  i308.textureParameters = i316
  var i319 = i309[9]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i319[i + 0]) );
  }
  i308.materialFlags = i318
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i323 = data
  i322.name = i323[0]
  i322.value = i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i327 = data
  i326.name = i327[0]
  i326.value = new pc.Color(i327[1], i327[2], i327[3], i327[4])
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i331 = data
  i330.name = i331[0]
  i330.value = new pc.Vec4( i331[1], i331[2], i331[3], i331[4] )
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i335 = data
  i334.name = i335[0]
  request.r(i335[1], i335[2], 0, i334, 'value')
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i339 = data
  i338.name = i339[0]
  i338.enabled = !!i339[1]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i341 = data
  i340.name = i341[0]
  i340.halfPrecision = !!i341[1]
  i340.vertexCount = i341[2]
  i340.aabb = i341[3]
  var i343 = i341[4]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( !!i343[i + 0] );
  }
  i340.streams = i342
  i340.vertices = i341[5]
  var i345 = i341[6]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i345[i + 0]) );
  }
  i340.subMeshes = i344
  var i347 = i341[7]
  var i346 = []
  for(var i = 0; i < i347.length; i += 16) {
    i346.push( new pc.Mat4().setData(i347[i + 0], i347[i + 1], i347[i + 2], i347[i + 3],  i347[i + 4], i347[i + 5], i347[i + 6], i347[i + 7],  i347[i + 8], i347[i + 9], i347[i + 10], i347[i + 11],  i347[i + 12], i347[i + 13], i347[i + 14], i347[i + 15]) );
  }
  i340.bindposes = i346
  var i349 = i341[8]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i349[i + 0]) );
  }
  i340.blendShapes = i348
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i355 = data
  i354.triangles = i355[0]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i361 = data
  i360.name = i361[0]
  var i363 = i361[1]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i363[i + 0]) );
  }
  i360.frames = i362
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i365 = data
  i364.pivot = new pc.Vec2( i365[0], i365[1] )
  i364.anchorMin = new pc.Vec2( i365[2], i365[3] )
  i364.anchorMax = new pc.Vec2( i365[4], i365[5] )
  i364.sizeDelta = new pc.Vec2( i365[6], i365[7] )
  i364.anchoredPosition3D = new pc.Vec3( i365[8], i365[9], i365[10] )
  i364.rotation = new pc.Quat(i365[11], i365[12], i365[13], i365[14])
  i364.scale = new pc.Vec3( i365[15], i365[16], i365[17] )
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i367 = data
  i366.cullTransparentMesh = !!i367[0]
  return i366
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.UI.Image' )
  var i369 = data
  request.r(i369[0], i369[1], 0, i368, 'm_Sprite')
  i368.m_Type = i369[2]
  i368.m_PreserveAspect = !!i369[3]
  i368.m_FillCenter = !!i369[4]
  i368.m_FillMethod = i369[5]
  i368.m_FillAmount = i369[6]
  i368.m_FillClockwise = !!i369[7]
  i368.m_FillOrigin = i369[8]
  i368.m_UseSpriteMesh = !!i369[9]
  i368.m_PixelsPerUnitMultiplier = i369[10]
  request.r(i369[11], i369[12], 0, i368, 'm_Material')
  i368.m_Maskable = !!i369[13]
  i368.m_Color = new pc.Color(i369[14], i369[15], i369[16], i369[17])
  i368.m_RaycastTarget = !!i369[18]
  i368.m_RaycastPadding = new pc.Vec4( i369[19], i369[20], i369[21], i369[22] )
  return i368
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i370 = root || request.c( 'FixedJoystick' )
  var i371 = data
  request.r(i371[0], i371[1], 0, i370, 'background')
  i370.handleRange = i371[2]
  i370.deadZone = i371[3]
  i370.axisOptions = i371[4]
  i370.snapX = !!i371[5]
  i370.snapY = !!i371[6]
  request.r(i371[7], i371[8], 0, i370, 'handle')
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i373 = data
  i372.name = i373[0]
  i372.tagId = i373[1]
  i372.enabled = !!i373[2]
  i372.isStatic = !!i373[3]
  i372.layer = i373[4]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i375 = data
  i374.name = i375[0]
  i374.width = i375[1]
  i374.height = i375[2]
  i374.mipmapCount = i375[3]
  i374.anisoLevel = i375[4]
  i374.filterMode = i375[5]
  i374.hdr = !!i375[6]
  i374.format = i375[7]
  i374.wrapMode = i375[8]
  i374.alphaIsTransparency = !!i375[9]
  i374.alphaSource = i375[10]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i377 = data
  i376.name = i377[0]
  i376.atlasId = i377[1]
  i376.mipmapCount = i377[2]
  i376.hdr = !!i377[3]
  i376.size = i377[4]
  i376.anisoLevel = i377[5]
  i376.filterMode = i377[6]
  i376.wrapMode = i377[7]
  var i379 = i377[8]
  var i378 = []
  for(var i = 0; i < i379.length; i += 4) {
    i378.push( UnityEngine.Rect.MinMaxRect(i379[i + 0], i379[i + 1], i379[i + 2], i379[i + 3]) );
  }
  i376.rects = i378
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i383 = data
  i382.name = i383[0]
  i382.index = i383[1]
  i382.startup = !!i383[2]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i385 = data
  i384.position = new pc.Vec3( i385[0], i385[1], i385[2] )
  i384.scale = new pc.Vec3( i385[3], i385[4], i385[5] )
  i384.rotation = new pc.Quat(i385[6], i385[7], i385[8], i385[9])
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i387 = data
  i386.enabled = !!i387[0]
  i386.aspect = i387[1]
  i386.orthographic = !!i387[2]
  i386.orthographicSize = i387[3]
  i386.backgroundColor = new pc.Color(i387[4], i387[5], i387[6], i387[7])
  i386.nearClipPlane = i387[8]
  i386.farClipPlane = i387[9]
  i386.fieldOfView = i387[10]
  i386.depth = i387[11]
  i386.clearFlags = i387[12]
  i386.cullingMask = i387[13]
  i386.rect = i387[14]
  request.r(i387[15], i387[16], 0, i386, 'targetTexture')
  i386.usePhysicalProperties = !!i387[17]
  i386.focalLength = i387[18]
  i386.sensorSize = new pc.Vec2( i387[19], i387[20] )
  i386.lensShift = new pc.Vec2( i387[21], i387[22] )
  i386.gateFit = i387[23]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i389 = data
  i388.enabled = !!i389[0]
  i388.type = i389[1]
  i388.color = new pc.Color(i389[2], i389[3], i389[4], i389[5])
  i388.cullingMask = i389[6]
  i388.intensity = i389[7]
  i388.range = i389[8]
  i388.spotAngle = i389[9]
  i388.shadows = i389[10]
  i388.shadowNormalBias = i389[11]
  i388.shadowBias = i389[12]
  i388.shadowStrength = i389[13]
  i388.shadowResolution = i389[14]
  i388.lightmapBakeType = i389[15]
  i388.renderMode = i389[16]
  request.r(i389[17], i389[18], 0, i388, 'cookie')
  i388.cookieSize = i389[19]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i391 = data
  request.r(i391[0], i391[1], 0, i390, 'sharedMesh')
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'additionalVertexStreams')
  i392.enabled = !!i393[2]
  request.r(i393[3], i393[4], 0, i392, 'sharedMaterial')
  var i395 = i393[5]
  var i394 = []
  for(var i = 0; i < i395.length; i += 2) {
  request.r(i395[i + 0], i395[i + 1], 2, i394, '')
  }
  i392.sharedMaterials = i394
  i392.receiveShadows = !!i393[6]
  i392.shadowCastingMode = i393[7]
  i392.sortingLayerID = i393[8]
  i392.sortingOrder = i393[9]
  i392.lightmapIndex = i393[10]
  i392.lightmapSceneIndex = i393[11]
  i392.lightmapScaleOffset = new pc.Vec4( i393[12], i393[13], i393[14], i393[15] )
  i392.lightProbeUsage = i393[16]
  i392.reflectionProbeUsage = i393[17]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i399 = data
  i398.center = new pc.Vec3( i399[0], i399[1], i399[2] )
  i398.radius = i399[3]
  i398.height = i399[4]
  i398.direction = i399[5]
  i398.enabled = !!i399[6]
  i398.isTrigger = !!i399[7]
  request.r(i399[8], i399[9], 0, i398, 'material')
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i401 = data
  i400.mass = i401[0]
  i400.drag = i401[1]
  i400.angularDrag = i401[2]
  i400.useGravity = !!i401[3]
  i400.isKinematic = !!i401[4]
  i400.constraints = i401[5]
  i400.maxAngularVelocity = i401[6]
  i400.collisionDetectionMode = i401[7]
  i400.interpolation = i401[8]
  return i400
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i402 = root || request.c( 'PlayerController' )
  var i403 = data
  request.r(i403[0], i403[1], 0, i402, 'joystick')
  request.r(i403[2], i403[3], 0, i402, 'rigid')
  i402.speed = i403[4]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i405 = data
  i404.enabled = !!i405[0]
  i404.planeDistance = i405[1]
  i404.referencePixelsPerUnit = i405[2]
  i404.isFallbackOverlay = !!i405[3]
  i404.renderMode = i405[4]
  i404.renderOrder = i405[5]
  i404.sortingLayerName = i405[6]
  i404.sortingOrder = i405[7]
  i404.scaleFactor = i405[8]
  request.r(i405[9], i405[10], 0, i404, 'worldCamera')
  i404.overrideSorting = !!i405[11]
  i404.pixelPerfect = !!i405[12]
  i404.targetDisplay = i405[13]
  i404.overridePixelPerfect = !!i405[14]
  return i404
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i407 = data
  i406.m_UiScaleMode = i407[0]
  i406.m_ReferencePixelsPerUnit = i407[1]
  i406.m_ScaleFactor = i407[2]
  i406.m_ReferenceResolution = new pc.Vec2( i407[3], i407[4] )
  i406.m_ScreenMatchMode = i407[5]
  i406.m_MatchWidthOrHeight = i407[6]
  i406.m_PhysicalUnit = i407[7]
  i406.m_FallbackScreenDPI = i407[8]
  i406.m_DefaultSpriteDPI = i407[9]
  i406.m_DynamicPixelsPerUnit = i407[10]
  i406.m_PresetInfoIsWorld = !!i407[11]
  return i406
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i409 = data
  i408.m_IgnoreReversedGraphics = !!i409[0]
  i408.m_BlockingObjects = i409[1]
  i408.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i409[2] )
  return i408
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i411 = data
  request.r(i411[0], i411[1], 0, i410, 'm_FirstSelected')
  i410.m_sendNavigationEvents = !!i411[2]
  i410.m_DragThreshold = i411[3]
  return i410
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i413 = data
  i412.m_HorizontalAxis = i413[0]
  i412.m_VerticalAxis = i413[1]
  i412.m_SubmitButton = i413[2]
  i412.m_CancelButton = i413[3]
  i412.m_InputActionsPerSecond = i413[4]
  i412.m_RepeatDelay = i413[5]
  i412.m_ForceModuleActive = !!i413[6]
  i412.m_SendPointerHoverToParent = !!i413[7]
  return i412
}

Deserializers["OrientationViewer"] = function (request, data, root) {
  var i414 = root || request.c( 'OrientationViewer' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'width')
  request.r(i415[2], i415[3], 0, i414, 'height')
  return i414
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.Text' )
  var i417 = data
  i416.m_FontData = request.d('UnityEngine.UI.FontData', i417[0], i416.m_FontData)
  i416.m_Text = i417[1]
  request.r(i417[2], i417[3], 0, i416, 'm_Material')
  i416.m_Maskable = !!i417[4]
  i416.m_Color = new pc.Color(i417[5], i417[6], i417[7], i417[8])
  i416.m_RaycastTarget = !!i417[9]
  i416.m_RaycastPadding = new pc.Vec4( i417[10], i417[11], i417[12], i417[13] )
  return i416
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.UI.FontData' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'm_Font')
  i418.m_FontSize = i419[2]
  i418.m_FontStyle = i419[3]
  i418.m_BestFit = !!i419[4]
  i418.m_MinSize = i419[5]
  i418.m_MaxSize = i419[6]
  i418.m_Alignment = i419[7]
  i418.m_AlignByGeometry = !!i419[8]
  i418.m_RichText = !!i419[9]
  i418.m_HorizontalOverflow = i419[10]
  i418.m_VerticalOverflow = i419[11]
  i418.m_LineSpacing = i419[12]
  return i418
}

Deserializers["LunaPlaygroundField"] = function (request, data, root) {
  var i420 = root || request.c( 'LunaPlaygroundField' )
  var i421 = data
  request.r(i421[0], i421[1], 0, i420, 'levelTxt')
  request.r(i421[2], i421[3], 0, i420, 'modeTxt')
  i420.level = i421[4]
  i420.mode = i421[5]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i423 = data
  i422.enabled = !!i423[0]
  i422.isTrigger = !!i423[1]
  request.r(i423[2], i423[3], 0, i422, 'material')
  request.r(i423[4], i423[5], 0, i422, 'sharedMesh')
  i422.convex = !!i423[6]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i425 = data
  i424.center = new pc.Vec3( i425[0], i425[1], i425[2] )
  i424.size = new pc.Vec3( i425[3], i425[4], i425[5] )
  i424.enabled = !!i425[6]
  i424.isTrigger = !!i425[7]
  request.r(i425[8], i425[9], 0, i424, 'material')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i427 = data
  i426.ambientIntensity = i427[0]
  i426.reflectionIntensity = i427[1]
  i426.ambientMode = i427[2]
  i426.ambientLight = new pc.Color(i427[3], i427[4], i427[5], i427[6])
  i426.ambientSkyColor = new pc.Color(i427[7], i427[8], i427[9], i427[10])
  i426.ambientGroundColor = new pc.Color(i427[11], i427[12], i427[13], i427[14])
  i426.ambientEquatorColor = new pc.Color(i427[15], i427[16], i427[17], i427[18])
  i426.fogColor = new pc.Color(i427[19], i427[20], i427[21], i427[22])
  i426.fogEndDistance = i427[23]
  i426.fogStartDistance = i427[24]
  i426.fogDensity = i427[25]
  i426.fog = !!i427[26]
  request.r(i427[27], i427[28], 0, i426, 'skybox')
  i426.fogMode = i427[29]
  var i429 = i427[30]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i429[i + 0]) );
  }
  i426.lightmaps = i428
  i426.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i427[31], i426.lightProbes)
  i426.lightmapsMode = i427[32]
  i426.mixedBakeMode = i427[33]
  i426.environmentLightingMode = i427[34]
  i426.ambientProbe = new pc.SphericalHarmonicsL2(i427[35])
  i426.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i427[36])
  i426.useReferenceAmbientProbe = !!i427[37]
  request.r(i427[38], i427[39], 0, i426, 'customReflection')
  request.r(i427[40], i427[41], 0, i426, 'defaultReflection')
  i426.defaultReflectionMode = i427[42]
  i426.defaultReflectionResolution = i427[43]
  i426.sunLightObjectId = i427[44]
  i426.pixelLightCount = i427[45]
  i426.defaultReflectionHDR = !!i427[46]
  i426.hasLightDataAsset = !!i427[47]
  i426.hasManualGenerate = !!i427[48]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'lightmapColor')
  request.r(i433[2], i433[3], 0, i432, 'lightmapDirection')
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i434 = root || new UnityEngine.LightProbes()
  var i435 = data
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i443 = data
  var i445 = i443[0]
  var i444 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i445.length; i += 1) {
    i444.add(i445[i + 0]);
  }
  i442.invalidShaderVariants = i444
  i442.name = i443[1]
  i442.guid = i443[2]
  var i447 = i443[3]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( i447[i + 0] );
  }
  i442.shaderDefinedKeywords = i446
  var i449 = i443[4]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i449[i + 0]) );
  }
  i442.passes = i448
  var i451 = i443[5]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i451[i + 0]) );
  }
  i442.usePasses = i450
  var i453 = i443[6]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i453[i + 0]) );
  }
  i442.defaultParameterValues = i452
  request.r(i443[7], i443[8], 0, i442, 'unityFallbackShader')
  i442.readDepth = !!i443[9]
  i442.isCreatedByShaderGraph = !!i443[10]
  i442.usedBatchUniforms = i443[11]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i460 = root || new pc.UnityShaderPass()
  var i461 = data
  i460.id = i461[0]
  i460.subShaderIndex = i461[1]
  i460.name = i461[2]
  i460.passType = i461[3]
  i460.usePass = !!i461[4]
  i460.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[5], i460.zTest)
  i460.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[6], i460.zWrite)
  i460.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[7], i460.culling)
  i460.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i461[8], i460.blending)
  i460.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i461[9], i460.alphaBlending)
  i460.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[10], i460.colorWriteMask)
  i460.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[11], i460.offsetUnits)
  i460.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[12], i460.offsetFactor)
  i460.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[13], i460.stencilRef)
  i460.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[14], i460.stencilReadMask)
  i460.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[15], i460.stencilWriteMask)
  i460.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i461[16], i460.stencilOp)
  i460.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i461[17], i460.stencilOpFront)
  i460.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i461[18], i460.stencilOpBack)
  var i463 = i461[19]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i463[i + 0]) );
  }
  i460.tags = i462
  var i465 = i461[20]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( i465[i + 0] );
  }
  i460.passDefinedKeywords = i464
  var i467 = i461[21]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i467[i + 0]) );
  }
  i460.passDefinedKeywordGroups = i466
  var i469 = i461[22]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i469[i + 0]) );
  }
  i460.variants = i468
  var i471 = i461[23]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i471[i + 0]) );
  }
  i460.excludedVariants = i470
  i460.hasDepthReader = !!i461[24]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i473 = data
  i472.val = i473[0]
  i472.name = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i475 = data
  i474.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[0], i474.src)
  i474.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[1], i474.dst)
  i474.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[2], i474.op)
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i477 = data
  i476.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i477[0], i476.pass)
  i476.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i477[1], i476.fail)
  i476.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i477[2], i476.zFail)
  i476.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i477[3], i476.comp)
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i481 = data
  i480.name = i481[0]
  i480.value = i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i485 = data
  var i487 = i485[0]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( i487[i + 0] );
  }
  i484.keywords = i486
  i484.hasDiscard = !!i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i491 = data
  i490.passId = i491[0]
  i490.subShaderIndex = i491[1]
  var i493 = i491[2]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( i493[i + 0] );
  }
  i490.keywords = i492
  i490.vertexProgram = i491[3]
  i490.fragmentProgram = i491[4]
  i490.readDepth = !!i491[5]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'shader')
  i496.pass = i497[2]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i501 = data
  i500.name = i501[0]
  i500.type = i501[1]
  i500.value = new pc.Vec4( i501[2], i501[3], i501[4], i501[5] )
  i500.textureValue = i501[6]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i503 = data
  i502.name = i503[0]
  request.r(i503[1], i503[2], 0, i502, 'texture')
  i502.aabb = i503[3]
  i502.vertices = i503[4]
  i502.triangles = i503[5]
  i502.textureRect = UnityEngine.Rect.MinMaxRect(i503[6], i503[7], i503[8], i503[9])
  i502.packedRect = UnityEngine.Rect.MinMaxRect(i503[10], i503[11], i503[12], i503[13])
  i502.border = new pc.Vec4( i503[14], i503[15], i503[16], i503[17] )
  i502.transparency = i503[18]
  i502.bounds = i503[19]
  i502.pixelsPerUnit = i503[20]
  i502.textureWidth = i503[21]
  i502.textureHeight = i503[22]
  i502.nativeSize = new pc.Vec2( i503[23], i503[24] )
  i502.pivot = new pc.Vec2( i503[25], i503[26] )
  i502.textureRectOffset = new pc.Vec2( i503[27], i503[28] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i505 = data
  i504.name = i505[0]
  i504.ascent = i505[1]
  i504.originalLineHeight = i505[2]
  i504.fontSize = i505[3]
  var i507 = i505[4]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i507[i + 0]) );
  }
  i504.characterInfo = i506
  request.r(i505[5], i505[6], 0, i504, 'texture')
  i504.originalFontSize = i505[7]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i511 = data
  i510.index = i511[0]
  i510.advance = i511[1]
  i510.bearing = i511[2]
  i510.glyphWidth = i511[3]
  i510.glyphHeight = i511[4]
  i510.minX = i511[5]
  i510.maxX = i511[6]
  i510.minY = i511[7]
  i510.maxY = i511[8]
  i510.uvBottomLeftX = i511[9]
  i510.uvBottomLeftY = i511[10]
  i510.uvBottomRightX = i511[11]
  i510.uvBottomRightY = i511[12]
  i510.uvTopLeftX = i511[13]
  i510.uvTopLeftY = i511[14]
  i510.uvTopRightX = i511[15]
  i510.uvTopRightY = i511[16]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i513 = data
  var i515 = i513[0]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i515[i + 0]) );
  }
  i512.files = i514
  i512.componentToPrefabIds = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i519 = data
  i518.path = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'unityObject')
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i521 = data
  var i523 = i521[0]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i523[i + 0]) );
  }
  i520.scriptsExecutionOrder = i522
  var i525 = i521[1]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i525[i + 0]) );
  }
  i520.sortingLayers = i524
  var i527 = i521[2]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i527[i + 0]) );
  }
  i520.cullingLayers = i526
  i520.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i521[3], i520.timeSettings)
  i520.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i521[4], i520.physicsSettings)
  i520.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i521[5], i520.physics2DSettings)
  i520.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i521[6], i520.qualitySettings)
  i520.enableRealtimeShadows = !!i521[7]
  i520.enableAutoInstancing = !!i521[8]
  i520.enableDynamicBatching = !!i521[9]
  i520.lightmapEncodingQuality = i521[10]
  i520.desiredColorSpace = i521[11]
  var i529 = i521[12]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( i529[i + 0] );
  }
  i520.allTags = i528
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i533 = data
  i532.name = i533[0]
  i532.value = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i537 = data
  i536.id = i537[0]
  i536.name = i537[1]
  i536.value = i537[2]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i541 = data
  i540.id = i541[0]
  i540.name = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i543 = data
  i542.fixedDeltaTime = i543[0]
  i542.maximumDeltaTime = i543[1]
  i542.timeScale = i543[2]
  i542.maximumParticleTimestep = i543[3]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i545 = data
  i544.gravity = new pc.Vec3( i545[0], i545[1], i545[2] )
  i544.defaultSolverIterations = i545[3]
  i544.bounceThreshold = i545[4]
  i544.autoSyncTransforms = !!i545[5]
  i544.autoSimulation = !!i545[6]
  var i547 = i545[7]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i547[i + 0]) );
  }
  i544.collisionMatrix = i546
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i551 = data
  i550.enabled = !!i551[0]
  i550.layerId = i551[1]
  i550.otherLayerId = i551[2]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'material')
  i552.gravity = new pc.Vec2( i553[2], i553[3] )
  i552.positionIterations = i553[4]
  i552.velocityIterations = i553[5]
  i552.velocityThreshold = i553[6]
  i552.maxLinearCorrection = i553[7]
  i552.maxAngularCorrection = i553[8]
  i552.maxTranslationSpeed = i553[9]
  i552.maxRotationSpeed = i553[10]
  i552.baumgarteScale = i553[11]
  i552.baumgarteTOIScale = i553[12]
  i552.timeToSleep = i553[13]
  i552.linearSleepTolerance = i553[14]
  i552.angularSleepTolerance = i553[15]
  i552.defaultContactOffset = i553[16]
  i552.autoSimulation = !!i553[17]
  i552.queriesHitTriggers = !!i553[18]
  i552.queriesStartInColliders = !!i553[19]
  i552.callbacksOnDisable = !!i553[20]
  i552.reuseCollisionCallbacks = !!i553[21]
  i552.autoSyncTransforms = !!i553[22]
  var i555 = i553[23]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i555[i + 0]) );
  }
  i552.collisionMatrix = i554
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i559 = data
  i558.enabled = !!i559[0]
  i558.layerId = i559[1]
  i558.otherLayerId = i559[2]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i561 = data
  var i563 = i561[0]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i563[i + 0]) );
  }
  i560.qualityLevels = i562
  var i565 = i561[1]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( i565[i + 0] );
  }
  i560.names = i564
  i560.shadows = i561[2]
  i560.anisotropicFiltering = i561[3]
  i560.antiAliasing = i561[4]
  i560.lodBias = i561[5]
  i560.shadowCascades = i561[6]
  i560.shadowDistance = i561[7]
  i560.shadowmaskMode = i561[8]
  i560.shadowProjection = i561[9]
  i560.shadowResolution = i561[10]
  i560.softParticles = !!i561[11]
  i560.softVegetation = !!i561[12]
  i560.activeColorSpace = i561[13]
  i560.desiredColorSpace = i561[14]
  i560.masterTextureLimit = i561[15]
  i560.maxQueuedFrames = i561[16]
  i560.particleRaycastBudget = i561[17]
  i560.pixelLightCount = i561[18]
  i560.realtimeReflectionProbes = !!i561[19]
  i560.shadowCascade2Split = i561[20]
  i560.shadowCascade4Split = new pc.Vec3( i561[21], i561[22], i561[23] )
  i560.streamingMipmapsActive = !!i561[24]
  i560.vSyncCount = i561[25]
  i560.asyncUploadBufferSize = i561[26]
  i560.asyncUploadTimeSlice = i561[27]
  i560.billboardsFaceCameraPosition = !!i561[28]
  i560.shadowNearPlaneOffset = i561[29]
  i560.streamingMipmapsMemoryBudget = i561[30]
  i560.maximumLODLevel = i561[31]
  i560.streamingMipmapsAddAllCameras = !!i561[32]
  i560.streamingMipmapsMaxLevelReduction = i561[33]
  i560.streamingMipmapsRenderersPerFrame = i561[34]
  i560.resolutionScalingFixedDPIFactor = i561[35]
  i560.streamingMipmapsMaxFileIORequests = i561[36]
  i560.currentQualityLevel = i561[37]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i571 = data
  i570.weight = i571[0]
  i570.vertices = i571[1]
  i570.normals = i571[2]
  i570.tangents = i571[3]
  return i570
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[9],"42":[17],"43":[17],"44":[17],"45":[17],"46":[17],"47":[17],"48":[17],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[9],"64":[14],"65":[66],"67":[66],"19":[1],"68":[1],"69":[14,1],"70":[1,2],"71":[1],"72":[2,1],"73":[14],"74":[2,1],"75":[1],"76":[77],"78":[1],"79":[1],"21":[19],"4":[2,1],"80":[1],"20":[19],"81":[1],"82":[1],"83":[1],"84":[1],"85":[1],"86":[1],"87":[1],"88":[1],"89":[1],"90":[2,1],"91":[1],"92":[1],"93":[1],"94":[1],"25":[2,1],"95":[1],"96":[22],"97":[22],"23":[22],"98":[22],"99":[9],"100":[9],"101":[77],"102":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","FixedJoystick","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","PlayerController","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","OrientationViewer","UnityEngine.UI.Text","UnityEngine.Font","LunaPlaygroundField","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.15f1";

Deserializers.productName = "PlayableTest";

Deserializers.lunaInitializationTime = "08/08/2023 03:22:37";

Deserializers.lunaDaysRunning = "10.1";

Deserializers.lunaVersion = "5.2.0";

Deserializers.lunaSHA = "a655a1e01be315dbfa8d2e1b74c75f56b0112281";

Deserializers.creativeName = "Arena-Concept1";

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

Deserializers.buildID = "71935bd5-1cdb-418f-98b1-e5f778fdb2d1";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

