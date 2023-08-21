using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class OrientationViewer : MonoBehaviour
{
    [SerializeField] private Text width;
    [SerializeField] private Text height;
    [SerializeField] private Text currentResolution;
    private void Update()
    {
        width.text = $"Width {Screen.width}";
        height.text = $"Height {Screen.height}";
        currentResolution.text = $"{Screen.currentResolution.width} x {Screen.currentResolution.height}";
    }
}
