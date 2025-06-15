import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function ContactDetails() {
  return (
        <div className="space-y-8">
            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                    Busia Town<br />
                    Busia<br />
                    (Exact address to be provided)
                </p>
                </div>
            </div>

            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                    +254 728 406 267<br />
                    (Call or WhatsApp)
                </p>
                </div>
            </div>

            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                    tbcfunyula@gmail.comg<br />
                    pastor@tbcfunyula.com
                </p>
                </div>
            </div>

            <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Times</h3>
                <div className="text-gray-600 space-y-1">
                    <p>Sunday Worship: 9:00 AM</p>
                    <p>Bible Study: Wednesday 7:00 PM</p>
                    <p>Prayer Meeting: Friday 6:30 PM</p>
                </div>
                </div>
            </div>
        </div>
    )
}
