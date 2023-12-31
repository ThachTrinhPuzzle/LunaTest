using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public static PlayerController Instance;
    public Joystick joystick;
    public Rigidbody rigid;
    [SerializeField] private float speed;
    private void Awake()
    {
        Instance = this;
    }
    private void Update()
    {
        rigid.velocity = speed * new Vector3(joystick.Horizontal, 0, joystick.Vertical);
    }
}
