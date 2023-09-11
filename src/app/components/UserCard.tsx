import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

type Props = {
  userProfile: UserProfile;
};

export default function UserCard({ userProfile }: Props) {
  const userImage = userProfile?.image ? (
    <Image
      className="rounded-full mx-auto"
      src={userProfile?.image}
      width={200}
      height={200}
      alt={userProfile?.username ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  const userDetails = userProfile ? (
    <>
      <ul className="mx-auto space-y-5 mt-10">
        <li>
          <h1 data-cy="name">
            {userProfile.firstName} {userProfile.lastName}{" "}
            {userProfile.pronouns !== "N/A" ? `| ${userProfile.pronouns}` : ""}
          </h1>
        </li>
        <li>
          <h2 data-cy="username" className="text-indigo-800">
            @{userProfile.username}
          </h2>
        </li>
        <li>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faLocationDot} className="w-5" />
            <h2 data-cy="location" className="ml-1">
              {userProfile.location}
            </h2>
          </div>
        </li>
        <li>
          {userProfile.link !== "N/A" && (
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faLink} className="w-5" />
              <Link
                data-cy="link"
                href={userProfile.link}
                className="text-blue-800 hover:underline hover:opacity-90"
              >
                {userProfile.link}
              </Link>
            </div>
          )}
        </li>
        <li> {userProfile.bio && <p data-cy="bio">{userProfile.bio}</p>}</li>
      </ul>
    </>
  ) : null;

  return (
    <section className="mx-auto flex flex-col" id="profileInfo">
      {userImage}
      {userDetails}
    </section>
  );
}
