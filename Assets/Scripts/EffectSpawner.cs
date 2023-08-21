using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EffectSpawner : MonoBehaviour
{
    public GameObject prefab;
    public GameObject effect;
    public Transform target;
    
    public void SpawnEffect()
    {
        Debug.Log("Effect");
        StartCoroutine(PlayEffect());
        Debug.Log(target.position);
    }

    public IEnumerator PlayEffect()
    {
        effect.SetActive(true);
        effect.transform.position = PlayerController.Instance.transform.position;
        yield return new WaitForSeconds(3);
        effect.SetActive(false);

    }

    public IEnumerator CreateEffect()
    {
        GameObject obj = Instantiate(prefab);
        obj.transform.position = PlayerController.Instance.transform.position;
        yield return new WaitForSeconds(3);
        Destroy(obj);
    }
}
