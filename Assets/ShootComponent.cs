using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShootComponent : MonoBehaviour
{
    public GameObject prefab;
    public float fireRate = 1;
    private float nextFire = 0.0F;
    public float velocity = 40;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0) && Time.time > nextFire)
        {
            nextFire = Time.time + fireRate;
            GameObject projectile = Instantiate(prefab) as GameObject;
            projectile.transform.position = transform.position + transform.forward * 2;
            Rigidbody rb = projectile.GetComponent<Rigidbody>();
            rb.velocity = transform.forward * velocity;
        }
    }
}
