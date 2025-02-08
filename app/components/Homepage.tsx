import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Homepage: FC = () => {
  return (
    <main>
      <div className="flex justify-center mt-28">
        <h1 className="w-[1020px] text-center text-6xl font-jidoka-newsreader">
          <span className="italic">We are devs, persons and teachers of dreams of Technology</span>
        </h1>
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/members" legacyBehavior>
          <a className="w-[227px] h-[64px] border rounded bg-[#1F5D6B] text-white font-jidoka-inter flex items-center justify-center">
            Community
          </a>
        </Link>
      </div>
      <div className="flex items-center mt-8">
        <Image
          src={'/images/homepage-people.jpg'}
          alt="people interacting with tech"
          fill={false}
          width={647}
          height={815}
        />
        <div>
          <Image
            src={'/images/homepage-computer.jpg'}
            alt="computer"
            fill={false}
            width={736}
            height={546}
          />
          <p className="font-jidoka-inter text-sm font-medium">
            Lorem ipsum - <span className="font-light">dolor sit amet consectetur adipisicing elit. Tempore quod ullam dolorem possimus veniam, nobis dolores ad sunt maiores velit repudiandae similique nihil illo, nulla id eligendi suscipit officiis quas!</span>
          </p>
        </div>
      </div>
      <div className="flex gap-5 ml-32 font-jidoka-inter">
        <h4 className="w-44 font-semibold ">
          WHAT WE BELIEVE
        </h4>
        <p className="max-w-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorum veritatis atque porro quia harum sequi sit saepe, vitae laborum quos quam quibusdam quae dicta recusandae pariatur voluptatem, nisi rerum!
          Sint nesciunt earum temporibus veniam id praesentium accusantium, illo veritatis sapiente consectetur quidem minima beatae perspiciatis, est voluptatem ipsa soluta dignissimos mollitia, ducimus cupiditate commodi eaque quas officia? Rem, expedita!
          Molestiae magnam veniam libero ratione ad mollitia quos laboriosam maiores dignissimos perspiciatis, consectetur molestias praesentium beatae magni omnis dolorem cum consequuntur iure placeat fuga voluptas quisquam aspernatur temporibus ipsum? Nam?
          Fugit voluptates expedita suscipit doloribus hic. Distinctio deleniti natus nulla quam nisi. Sequi minima eligendi architecto! Temporibus accusantium iure, quisquam deserunt ipsam recusandae impedit sed hic illum aspernatur voluptas debitis?
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste aliquid eius, facere eos blanditiis excepturi rem dolorum adipisci beatae amet, reprehenderit harum repudiandae ut unde officia veniam corrupti quos.
          Deleniti aspernatur animi esse quidem fuga quas fugit obcaecati ab reprehenderit illum nihil nulla, culpa expedita, accusantium asperiores iste fugiat vel soluta eaque id quae repellendus vitae dicta corporis. Libero!
          Autem porro rem, fuga magni error dolores vel illum iusto consequuntur eos cum modi tenetur animi voluptatibus laborum beatae aliquid sunt similique in nihil minus quis perferendis temporibus ullam. Rerum.
          Sapiente, magni necessitatibus nobis incidunt itaque, accusantium adipisci alias reprehenderit exercitationem quibusdam dignissimos quaerat ratione laborum, esse ut veritatis voluptatibus. Doloribus minus laboriosam ad voluptas debitis cum quod nihil molestias.
        </p>
      </div>
    </main>
  );
}

export default Homepage;
