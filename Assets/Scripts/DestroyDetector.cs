using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

[Serializable]
public class Person
{
    public string name;
    public int age;
}

public class DestroyDetector : MonoBehaviour
{
    public Person person;
    private void OnDestroy()
    {
        Debug.Log("Bye");
        Debug.Log($"{name} die");
    }
}
