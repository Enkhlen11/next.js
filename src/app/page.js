import { Cart } from "@/components/Cart";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Hello</h2>

        <Cart
          name={"Naruto"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis ratione in consequuntur praesentium? Voluptates tempora blanditiis harum vero, veritatis totam ipsam voluptatibus minima et, itaque nisi id sunt fugit!"
          }
          imgUrl={
            "https://awsimages.detik.net.id/community/media/visual/2019/10/10/bb1bf3b6-6460-46dd-9de4-f7baea9c0afc_34.jpeg?w=700&q=90"
          }
        />
      </div>
    </div>
  );
}
