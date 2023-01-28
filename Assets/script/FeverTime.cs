using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FeverTime : MonoBehaviour
{
    [SerializeField] private float fever_time, fever_score_count, next_fever_multipy;
    // fever_time = fever time
    // fever_score_count = score to fever time
    [SerializeField] private MapGenerator map_generator;
    [System.NonSerialized] public float score;
    private float timer;
    private bool isCount;
    // Start is called before the first frame update
    void Start()
    {
        timer = 0;
        isCount = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (isCount) timer += Time.deltaTime;
        if (timer >= fever_time && isCount)
        {
            map_generator.startTimer();
            fever_score_count = score + fever_score_count*next_fever_multipy;
            isCount = false;
            timer = 0;
        }
        if (score >= fever_score_count && !isCount)
        {
            map_generator.stopTimer();
            map_generator.currentTime[0] = map_generator.currentTime[1];
            map_generator.currentTime[1] = "Fever";
            isCount = true;
        }
        //Debug.LogFormat("Score : {0}", score);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        switch (collision.transform.tag)
        {
            case "item":
                ItemDetails item_details = collision.gameObject.GetComponent<ItemDetails>();
                int value_type = 0;
                if (item_details != null)
                {
                    if (item_details.item_type == "Good") value_type = 1;
                    else if (item_details.item_type == "Bad") value_type = -1;
                    score += item_details.item_value * value_type;
                }
                Destroy(collision.gameObject);
                break;
        }
    }
}
