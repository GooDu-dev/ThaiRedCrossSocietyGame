using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ItemGenerator : MonoBehaviour
{
    [SerializeField] private float spawnRate, limitSpawnRate;
    [SerializeField] private int spawnRange, limitChangeRate;
    [SerializeField] private GameObject[] items_list;
    [SerializeField] MapGenerator map;
    private Transform generator;
    private float cooldown;
    private int limitChange;
    private Dictionary<string, List<GameObject>> items = new Dictionary<string, List<GameObject>>{
        { "Morning", new List<GameObject>() },
        { "Lunch", new List<GameObject>() },
        { "Evening", new List<GameObject>() },
        { "Night", new List<GameObject>() },
        { "Fever", new List<GameObject>() }
    };
    // Start is called before the first frame update
    void Start()
    {
        generator = gameObject.GetComponent<Transform>();
        cooldown = 0;
        limitChange = limitChangeRate;
        foreach (GameObject obj in items_list)
        {
            foreach (Item.Time time in obj.GetComponent<ItemDetails>().getTime())
            {
                items[time.ToString()].Add(obj);
            }
        }
    }
    // Update is called once per frame
    void Update()
    {
        if (cooldown < Time.time)
        {
            spawnItem();
            cooldown = Time.time + spawnRate;
        }
    }

    private void spawnItem()
    {
        int random_item = Random.Range(0, items[map.getCurrentTime()].Count);
        int random_point;
        if (transform.position.y - spawnRange >= 0) random_point = Random.Range(-spawnRange, spawnRange);
        else random_point = Random.Range(0, spawnRange);
        Instantiate(items[map.getCurrentTime()][random_item], new Vector2(generator.transform.position.x, generator.transform.position.y+random_point), Quaternion.identity);
        if (Time.time >= limitChange)
        {
            spawnRate -= 0.1f;
            if (spawnRate <= limitSpawnRate) spawnRate = limitSpawnRate;
            limitChange += limitChangeRate;
        }
    }

}
