import Image from "next/image";
import { Building2, Mail, Phone, User } from "lucide-react";

const PROFILE_PICTURE = "/yohanes.png";
const NAME = "YOHANNES AFFANDY (JOJO)";
const JOB_TITLE = "Loan Market Office Dev";
const EMAIL = "it@loanmarket.co.id";
const USER_ID = "ID: LM9990001";
const PHONE_NUMBER = "6281234567890";

export default function Profile() {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
        <div className="relative h-24 w-24 flex-shrink-0">
          <Image
            alt="Profile picture"
            className="rounded-full object-cover"
            src={PROFILE_PICTURE}
            height={96}
            width={96}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-sky-500 text-center sm:text-left">
            {NAME}
          </h2>
          <div className="grid gap-4 text-sm sm:grid-cols-2 mt-3">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="truncate">{JOB_TITLE}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="truncate">{EMAIL}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="truncate">{USER_ID}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="truncate">{PHONE_NUMBER}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
