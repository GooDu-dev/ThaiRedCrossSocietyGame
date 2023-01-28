using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    [SerializeField] private float jumpSpeed;
    [SerializeField] private MapGenerator mapGenerator;
    public float moveSpeed;
    private Rigidbody2D rb;
    private float jumpCount = 0, jumpLimit = 2, fallMultipier = 1.1f;
    // Start is called before the first frame update
    void Start()
    {
        rb = gameObject.GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.velocity = new Vector2(moveSpeed, rb.velocity.y);

        if (Input.GetButtonDown("Jump") && jumpCount < jumpLimit)
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpSpeed);
            jumpCount++;
        }
        else if (Input.GetKeyDown(KeyCode.LeftControl) || Input.GetKeyDown(KeyCode.S))
        {
            // Crouch
            Debug.Log("Crouch");
        }
        if ((Input.GetKeyDown(KeyCode.LeftControl) || Input.GetKeyDown(KeyCode.S)) && rb.velocity.y != 0)
        {
            rb.velocity = new Vector2(rb.velocity.x, -1*jumpSpeed*fallMultipier);
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.transform.tag == "ground")
        {
            jumpCount = 0;
        }
    }
}
