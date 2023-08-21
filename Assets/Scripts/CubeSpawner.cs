using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeSpawner : MonoBehaviour
{
    public void SpawnCube()
    {
        Debug.Log("Cube");
        GameObject prefab = Resources.Load<GameObject>("Cube");
        GameObject cube = Instantiate(prefab);
        cube.transform.position = PlayerController.Instance.transform.position;
    }

    public void SpawnSpin()
    {
        Debug.Log("Spin");
        AutoRotate prefab = Resources.Load<AutoRotate>("Cube");
        AutoRotate spin = Instantiate(prefab);
        spin.transform.position = PlayerController.Instance.transform.position;
    }
}
