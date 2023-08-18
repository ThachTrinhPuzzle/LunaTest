using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaPlaygroundField : MonoBehaviour
{
    [SerializeField] private Text levelTxt;
    [SerializeField] private Text modeTxt;
    [SerializeField, LunaPlaygroundField("Game Level", 0, "Game Config")] private int level;
    [SerializeField, LunaPlaygroundField("Game Mode", 1, "Game Config")] private int mode;
    private void Update()
    {
        levelTxt.text = $"Level {level}";
        modeTxt.text = $"Mode {mode}";
    }
}
