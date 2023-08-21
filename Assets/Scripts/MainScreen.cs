using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Luna.Unity;

public class MainScreen : MonoBehaviour
{
    public void OnClickInstallBtn()
    {
        Debug.Log("Install");
        Playable.InstallFullGame();
    }

    public void OnClickEndgameBtn()
    {
        Debug.Log("Engame");
        LifeCycle.GameEnded();
    }

}
