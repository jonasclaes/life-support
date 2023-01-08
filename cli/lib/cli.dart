import 'dart:io';

import 'package:cli/printer/constants.dart' as PrinterConstants;
import 'package:cli/printer/printer.dart';
import 'package:libserialport/libserialport.dart';

void printTest() async {
  for (final name in SerialPort.availablePorts) {
    final serialPort = SerialPort(name);

    print('Name: $name');
    print('\tDescription: ${serialPort.description}');
    print('\tManufacturer: ${serialPort.manufacturer}');
    print('\tSerial number: ${serialPort.serialNumber}');
    print('\tVID: 0x${serialPort.vendorId!.toRadixString(16)}');
    print('\tPID: 0x${serialPort.productId!.toRadixString(16)}');
  }

  final name = SerialPort.availablePorts.first;

  final printer = SerialPrinter.fromName(name);

  // printer.raw(PrinterConstants.ALIGN_CENTER);

  // var lyrics = await File("test.txt").readAsLines();
  // for (var line in lyrics) {
  //   print(line);
  //   printer.textln(line);
  // }

  // printer.ln(count: 8);

  print("That worked.");
}
