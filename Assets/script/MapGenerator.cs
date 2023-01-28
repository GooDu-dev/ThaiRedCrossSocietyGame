using System.Collections.Generic;
using UnityEngine;

public class MapGenerator : MonoBehaviour
{
    // [SerializeField] private GameObject groundRemover, groundGenerator;
    [SerializeField] private GameObject[] all_ground;
    [SerializeField] private Camera cam;
    [SerializeField] private GameObject player;
    [SerializeField] private Transform ground_generator_point, ground_remover_point;
    [SerializeField] private float time_per_map;
    [System.NonSerialized] public string[] currentTime = {"None", "None"};
    [System.NonSerialized] public bool isCount;
    private Dictionary<string, List<GameObject>> maps = new Dictionary<string, List<GameObject>> {
        { "None", new List<GameObject>() },
        { "Morning", new List<GameObject>() },
        { "Lunch", new List<GameObject>() },
        { "Evening", new List<GameObject>() },
        { "Night", new List<GameObject>() },
        { "Fever", new List<GameObject>() }
    };
    private float time_count = 0, timer;
    private List<GameObject> current_ground = new List<GameObject>();
    private Vector2 screenBounds;
    // Start is called before the first frame update
    void Start()
    {
        foreach (GameObject ground in all_ground) maps[ground.GetComponent<MapDetails>().getTime()].Add(ground);
        currentTime[1] = "Morning";
        time_count = time_per_map;
        generateStartGround();
        timer = 0;
        isCount = true;
    }

    // Update is called once per frame
    void Update()
    {
        Debug.LogFormat("CurrentTime : {0}", currentTime[1]);
        if(isCount) timer += Time.deltaTime;
        if (timer > time_count)
        {
            switch(currentTime[1]) {
                case "Morning":
                    currentTime[0] = currentTime[1];
                    currentTime[1] = "Lunch";
                    break;
                case "Lunch":
                    currentTime[0] = currentTime[1];
                    currentTime[1] = "Evening";
                    break;
                case "Evening":
                    currentTime[0] = currentTime[1];
                    currentTime[1] = "Night";
                    break;
                case "Night":
                    currentTime[0] = currentTime[1];
                    currentTime[1] = "Morning";
                    break;
                case "Fever":
                    currentTime[1] = currentTime[0];
                    currentTime[0] = "Fever";
                    break;
            }
            time_count += time_per_map;
        }
        if (current_ground[current_ground.Count - 1].GetComponent<MapDetails>().getPosition().x - current_ground[current_ground.Count-1].GetComponent<MapDetails>().getWorldWidth() / 2 < ground_generator_point.transform.position.x) createGround();
        if (current_ground[0].GetComponent<MapDetails>().getPosition().x < ground_remover_point.transform.position.x) deleteGround();
    }

    private void generateStartGround()
    {
        screenBounds = cam.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, cam.transform.position.z));
        MapDetails ground_details = all_ground[0].GetComponent<MapDetails>();
        int ground_needed = (int) Mathf.Ceil(screenBounds.x * 2 / ground_details.getWorldWidth());
        for (int i=0; i<ground_needed; i++)
        {
            GameObject ground = Instantiate(randomGround(currentTime[1])) as GameObject;
            ground.transform.position = new Vector2(ground_details.getPosition().x + ground_details.getWorldWidth() * i, ground_details.getPosition().y);
            current_ground.Add(ground);
        }
    }
    public void stopTimer()
    {
        isCount = false;
    }
    public void startTimer()
    {
        isCount = true;
        timer = time_count;
    }

    private GameObject randomGround(string time)
    {
        int random = Random.Range(0, maps[time].Count-1);
        GameObject obj = maps[currentTime[1]][random];
        return obj;
    }

    private void createGround()
    {
        GameObject ground = Instantiate(randomGround(currentTime[1])) as GameObject;
        MapDetails lastest_ground = current_ground[current_ground.Count - 1].GetComponent<MapDetails>();
        ground.transform.position = new Vector2(lastest_ground.getPosition().x + lastest_ground.getWorldWidth(), lastest_ground.getPosition().y);
        current_ground.Add(ground);
    }
    private void deleteGround()
    {
        Destroy(current_ground[0]);
        current_ground.Remove(current_ground[0]);
    }
    public string getCurrentTime()
    {
        return currentTime[1];
    }
}
