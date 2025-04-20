"use client";

import { useEffect, useState } from "react";
import { getSocialAccounts } from "@/lib/api";
import { SocialAccount } from "@/types";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function ConnectedAccounts() {
  const [accounts, setAccounts] = useState<SocialAccount[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getSocialAccounts();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Connected Accounts</h2>
        <Button variant="outline" size="sm">
          <PlusIcon className="h-4 w-4 mr-2" />
          Connect Account
        </Button>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      ) : (
        <div className="space-y-3">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <span
                  className={`h-6 w-6 rounded-full bg-${account.platform}-500`}
                />
                <span className="font-medium">{account.username}</span>
              </div>
              <span className="text-sm text-gray-500 capitalize">
                {account.platform}
              </span>
            </div>
          ))}

          {accounts.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              No connected accounts
            </p>
          )}
        </div>
      )}
    </div>
  );
}
