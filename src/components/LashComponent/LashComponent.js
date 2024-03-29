import styles from "./LashComp.module.css";
import image1 from "./comp1.webp"
import image2 from "./comp2.webp"

const comps = [
  {
    id: 1,
    name: "Lash extensions",
    content:
      "Eyelash extensions are a cosmetic enhancement that involves attaching synthetic or natural hair fibers to the natural eyelashes to create a fuller, more dramatic look. They are applied by a professional using a specialized adhesive and can last for several weeks",
  },
  {
    id: 2,
    name: "Lash lift",
    content:
      "Lash Lift is a semi-permanent method in which the eyelashes gets glued over the natural lashes. It is a quick method to get beautiful semi-permanent eyelashes as it gives the illusion of longer, fuller and shinier lashes to the natural ones.",
  },
];

const LashComponent = () => {
  return (
    <div className={styles.parcontain}>
      {comps.map((ele) => (
        <div key={ele.id} className={styles.container}>
          <div className={styles.row}>
            <div className={styles.imag}>
              <img src={`${ele.id === 1 ? image1 : image2}`} alt="" />
            </div>
            <div>
                <h2>{ele.name}</h2>
                <p>{ele.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LashComponent;
